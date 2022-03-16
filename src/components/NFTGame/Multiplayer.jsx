import React from 'react'
import Moralis from 'moralis';
import Phaser from 'phaser';

const Multiplayer = () => {

    var user;

       function launch(){
        if (!user) {
           console.log('PLEASE LOGIN USING METAMASK !!');
        }else{
            game = new Phaser.Game(config);
        }
       
       }

       launch();

        const serverUrl = "https://2qcgp8p9gsix.usemoralis.com:2053/server";
        const appId = "GCdHuKhOFa0RDjVwBAW6VzsYaXPe9i2xGG7o0fuJ";
        Moralis.start({ serverUrl, appId });

        /** Add from here down */
        async function login() {
            user = Moralis.User.current();
            if (!user) {
            try {
                user = await Moralis.authenticate()
                console.log(user)
                console.log(user.get('ethAddress'))
                launch();
            } catch(error) {
                console.log(' error hello')
            }
            }else{
                console.log('user exists!!');
                launch();
            }
        }

        async function logOut() {
            await Moralis.User.logOut();
            console.log("logged out");
            window.location.reload();
        }

        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };
        
        var game;
        var platforms;
        var player;
        var competitors = {};
        var cursors;

        //load your assets(img,video,animations)
        function preload ()
        {
           this.load.image('background', 'game/BG.png');
           this.load.image('ground', 'game/Tile/15.png');
           this.load.image('player', 'game/Player/Idle__001.png');
           this.load.image('groundS', 'game/Tile/14.png');
           this.load.image('groundE', 'game/Tile/16.png');

        }

        //initial setup
         async function create ()
        {
            this.add.image(400, 300, 'background').setScale(0.7);

            platforms = this.physics.add.staticGroup();

            // platforms.create(80, 400, 'ground').setScale(0.6).refreshBody();
            platforms.create(57, 500, 'groundS').setScale(0.6).refreshBody();
            platforms.create(133, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(209, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(285, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(361, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(437, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(513, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(589, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(665, 500, 'ground').setScale(0.6).refreshBody();
            platforms.create(741, 500, 'groundE').setScale(0.6).refreshBody();

            player = this.physics.add.sprite(500, 250, 'player').setScale(0.2).refreshBody();
            player.setBounce(0.2);
            player.setCollideWorldBounds(true);

            this.physics.add.collider(player, platforms);

            cursors = this.input.keyboard.createCursorKeys();

            //Check if a new player moves
            let user = Moralis.User.current()
            let query = new Moralis.Query('PlayerPosition');
            let subscription = await query.subscribe();
            subscription.on('create', (plocation) => {
                if(plocation.get('player')!=user.get('ethAddress')){

                    if(competitors[plocation.get('player')] == undefined){
                        //create a sprite
                        competitors[plocation.get('player')] = this.add.image( plocation.get('x'), plocation.get('y'), 'player').setScale(0.2);

                    }else{
                        competitors[plocation.get('player')].x = plocation.get('x');
                        competitors[plocation.get('player')].y = plocation.get('y');
                    }

                    console.log('Other player Moved...');
                    console.log('other player address: ',plocation.get('player'));
                    console.log('new X', plocation.get("x"));
                    console.log('new Y', plocation.get("y"));
                }
              });
        }
        
        //60 times per sec
         async function update ()
        {
            //logic
            if (cursors.left.isDown)
            {
                player.setVelocityX(-160);
            }
            else if (cursors.right.isDown)
            {
                player.setVelocityX(160);
            }
            else
            {
                player.setVelocityX(0);
            }
            if (cursors.up.isDown && player.body.touching.down)
            {
                player.setVelocityY(-200);
            }

            if(player.lastX!=player.x || player.lastY!=player.y){
                let user = Moralis.User.current();

                const PlayerPosition = Moralis.Object.extend("PlayerPosition");
                const playerPosition = new PlayerPosition();

                playerPosition.set('player', user.get('ethAddress'));
                playerPosition.set('x', player.x);
                playerPosition.set('y', player.y);

                player.lastX = player.x;
                player.lastY = player.y;

                await playerPosition.save();
            }
            
        }

    return (
        <>
            <button id="btn-login" onClick={() => login()}> Login</button>
            <button id="btn-logout" onClick={() => logOut()}>Logout</button> 
            <br/>
            <br /> 
        </>
    )
}

export default Multiplayer
