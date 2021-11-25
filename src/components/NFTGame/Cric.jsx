import React, { Component, useCallback } from 'react';
import Web3 from 'web3'
import MemoryToken from '../../abis/MemoryToken.json'
import Footer from '../containers/Footer'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Confetti from 'react-confetti';
import './Game.css'

const CARD_ARRAY = [
    {
      name: 'bhumra',
      img: '/nftImg/cric/bhumra.png'
    },
    {
      name: 'dhoni',
      img: '/nftImg/cric/dhoni.png'
    },
    {
      name: 'dravid',
      img: '/nftImg/cric/dravid.png'
    },
    {
      name: 'rahul',
      img: '/nftImg/cric/rahul.png'
    },
    {
      name: 'rishbh',
      img: '/nftImg/cric/rishbh.png'
    },
    {
      name: 'rohit',
      img: '/nftImg/cric/rohit.png'
    },
    {
      name: 'jaddu',
      img: '/nftImg/cric/jaddu.png'
    },
    {
      name: 'virat',
      img: '/nftImg/cric/virat.png'
    },
    {
      name: 'dhawan',
      img: '/nftImg/cric/dhawan.png'
    },
    {
      name: 'bhumra',
      img: '/nftImg/cric/bhumra.png'
    },
    {
      name: 'dhoni',
      img: '/nftImg/cric/dhoni.png'
    },
    {
      name: 'dravid',
      img: '/nftImg/cric/dravid.png'
    },
    {
      name: 'rahul',
      img: '/nftImg/cric/rahul.png'
    },
    {
      name: 'rishbh',
      img: '/nftImg/cric/rishbh.png'
    },
    {
      name: 'rohit',
      img: '/nftImg/cric/rohit.png'
    },
    {
      name: 'jaddu',
      img: '/nftImg/cric/jaddu.png'
    },
    {
      name: 'virat',
      img: '/nftImg/cric/virat.png'
    },
    {
      name: 'dhawan',
      img: '/nftImg/cric/dhawan.png'
    },
    
  ]
  //Generating Random NFT to give as a Wining Price
  const Rnft = CARD_ARRAY[Math.floor(Math.random() * CARD_ARRAY.length)].img.toString();
  console.log(Rnft);
  
  
class Cric extends Component {
   
    async componentWillMount(){
        await this.loadWeb3()
        await this.loadBlockchainData()
        this.setState({cardArray:CARD_ARRAY.sort(()=> 0.5 - Math.random())})
        this.setState({wonToken:[]})
        this.setState({tokenURIs:[]})
        // window.onload = frame()
    } 

    async loadWeb3(){
        if(window.ethereum){  //connect with new std browsers
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if(window.web3){  //connect with normal browser(Chrome)
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else{  //error show when metamask not installed/incompitable browser
          window.alert("Non-Ethereum Browser detected. Please use Metamask!!")
        }
      }

      async loadBlockchainData(){
          const web3 = window.web3
          const accounts = await new web3.eth.getAccounts()
        //   console.log('account:',accounts[0]);
          this.setState({account:accounts[0]});
        //   console.log(this.state.account);

         //Load Smart Contract
         const networkId = await web3.eth.getId()
         const networkData = MemoryToken.networks[networkId]
         if(networkData){
             const abi = MemoryToken.abi
             const address = networkData.address
             const token = new web3.eth.Contract(abi, address)
             this.setState({token})
            //  console.log(this.state.token)
             const totalSupply = await token.methods.totalSupply().call()
            //  console.log(totalSupply);
            //  this.setState({totalSupply})

             //Load Tokens
             let balanceOf = await token.methods.balanceOf(accounts[0]).call()
            //  console.log(balanceOf.toString());
             for(let i = 0; i < balanceOf; i++){
                let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call()
                // console.log('id:',id);
                let tokenURI = await token.methods.tokenURI(id).call()
                this.setState({
                    tokenURIs:[this.state.tokenURIs, tokenURI]
                })
             }
         }else{
             alert('MemoryToken Smart Contract is not deployed to the network');
         }

      }


//Choose Image
 chooseImage = (cardId) =>{
          cardId = cardId.toString()
          if(this.state.cardsWon.includes(cardId)){
            return window.location.origin + '/nftImg/cric/white.png'
          }else if(this.state.cardsChoosenId.includes(cardId)){
              return CARD_ARRAY[cardId].img
          }else{   
            return window.location.origin + '/nftImg/cric/ball.png'
          }
  }

//Flip Card
flipCard = async (cardId) =>{
          let alreadyChosen = this.state.cardsChoosen.length

          this.setState({
              cardsChoosen: [...this.state.cardsChoosen, this.state.cardArray[cardId].name],
              cardsChoosenId: [...this.state.cardsChoosenId, cardId]
          })

          if(alreadyChosen === 1){
              setTimeout(this.checkForMatch, 200)
          }
  }

//Check for Match
checkForMatch = async() => {
          const optionOneId = this.state.cardsChoosenId[0]
          const optionTwoId = this.state.cardsChoosenId[1]

          if(optionOneId == optionTwoId){
              alert('You clicked same image');
          }else if(this.state.cardsChoosen[0] === this.state.cardsChoosen[1]){
              alert(`you found match`)
              
              //adding matched nft to cardWon array
              this.setState({
                cardsWon:[...this.state.cardsWon, optionOneId, optionTwoId],
                tokenURIs:[...this.state.tokenURIs, CARD_ARRAY[optionOneId].img]
            })   
          }else{
              console.log('Sorry, try again');
          }

          //setting cardChoosen array empty after a successfull match! 
          this.setState({
              cardsChoosen:[],
              cardsChoosenId:[]
          })

          //Display msg after all matches found
          if(this.state.cardsWon.length === CARD_ARRAY.length){
            
            // alert('Congratulations! You Have a Good Memory.');
            this.setState({modalOnOff:true})              
              //Adding matched nft to users account
              this.state.token.methods.mint(
                  this.state.account,
                  window.location.origin + this.state.wonToken
              ).send({ from: this.state.account })
              .on('transactionHash', (hash)=>{
                  this.setState({ 
                    wonToken:[Rnft]
                  })
              })

              this.setState({ loading:false })

          }
  }

    constructor(props){
        super(props);
        this.state = {
            account:'0x00',
            token :null,
            totalSupply : 0,
            tokenURIs:[],
            cardArray:[],
            cardsChoosen:[],
            cardsChoosenId:[],
            cardsWon:[],
            wonToken:[],
            modalOnOff:false,
            startModal:true,
            loading:true,
        }
    }

  render() {
    return (
        <>

        <div className='cric__main'>
          { this.state.modalOnOff &&
              <Confetti
                width={2000}
                height={2000}        
              />
          }
           <div className="gradient_bg">
            <div className='gpt3__navbar'>
              <div className="gpt3__navbar-links">
               <div className="gpt3__navbar-links_logo">
                   <img src='./assets/navR.png' alt="logo"/>
               </div>
                <div className="gpt3__navbar-links_container">
                     <p><a href="/">Home</a></p>
                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                         <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                            Services
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/tswap" style={{color:'black'}}>Token Swap</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="/homeg" style={{color:'black'}}>GameFi</a></li>
                          </ul>
                          </li>
                          </ul>
                 </div>
               </div>
                <div className="gpt3__navbar-sign">
                    <p>{this.state.account}</p>
                </div>
            </div>
           </div>  
                    
        <div className="container-fluid cric__container mt-5">
    
          <div className="row">
            <main role="main" className="token-g col-12  col-md-6 offset-md-3 col-lg-6 offset-lg-3 text-center">
              <div className="content mr-auto ml-auto">
                <h1 className="d-4">Start matching now!</h1>
            
                <div className="grid mb-4" >
                  { this.state.cardArray.map((card, key) => {
                    return(
                       
                      <img
                        key={key}
                        src={this.chooseImage(key)}
                        data-id={key}
                        onClick={(event) => {
                          let cardId = event.target.getAttribute('data-id')
                          if(!this.state.cardsWon.includes(cardId.toString())) {
                            this.flipCard(cardId)
                          }
                        }}
                      />
                      
                    )
                  })}
                  <h5 className='text-center'>Match Found :<span id="result">&nbsp;{this.state.tokenURIs.length}</span></h5>
                  <div className="grid mb-4" >
                    
                    { this.state.tokenURIs.map((tokenURIs) => {
                      return(
                        <img
    
                          src={tokenURIs}
                        />
                      )
                    })}
                  </div>

              
                </div>

                

    <Modal className='game__modal'
             show={this.state.modalOnOff} 
             dialogClassName="modal-30w modal-md-10w"
            >

              { this.state.modalOnOff &&
                  <Confetti
                  width={2000}
                  height={2000}
                />
             }
            <Modal.Header bsPrefix className='text-center mt-3'>
                <Modal.Title >Congratulations !!</Modal.Title>
                <h1 className='mt-3'>You Won</h1>
                 
                  <h6>--Please confirm your NFT through Metamask--</h6>
                
            </Modal.Header>
            <Modal.Body>
                  {this.state.wonToken.map((wonToken) => {
                      return(
                        <>
                        <img
    
                          src={wonToken}
                        />
                        <h3 className='mt-3'>Awesome, You got this NFT !!</h3>
                        <Modal.Footer bsPrefix className='mt-2 mb-3 text-center'>              
                          <Button bsPrefix className='footer-save' onClick={ () => this.setState({modalOnOff:false}) }>OK</Button>
                        </Modal.Footer>
                         </>
                      )
                     })
              }              
            </Modal.Body>
            
     </Modal>

     <Modal className='game__modal'
             show={this.state.startModal} 
             dialogClassName="modal-30w modal-md-10w"
            >

            <Modal.Header bsPrefix className='text-center mt-3'>
                <Modal.Title ><h1>Info</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>You have to find all matching pairs and after successfull completion of game you will win one of this NFT randomly.</h4>
            </Modal.Body>
            <Modal.Footer bsPrefix className='mt-2 mb-3 text-center'>              
                <Button variant='primary' onClick={ () => this.setState({startModal:false}) }>START</Button>
            </Modal.Footer>
     </Modal>


            </div>
            </main>

          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Cric;