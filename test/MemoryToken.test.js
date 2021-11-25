const MemoryToken = artifacts.require('./MemoryToken.sol');

//Require 'Chai' for testing
require('chai').use(require('chai-as-promised')).should()

contract('Memory Token', (accounts) =>{

    let token
    before(async() => {
        token = await MemoryToken.deployed()
    })

    describe('deployment', async() => {
       it('deploys successfully', async() => {
            const address = token.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, "")
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
       })

       it('name available', async() => {
           const name = await token.name()
           assert.equal(name, 'Memory Token')
       })
       it('symbol available', async() => {
           const symbol = await token.symbol()
           assert.equal(symbol, 'MEMORY')
       })
    })


    describe('token distribution', async() => {
        let result

       it('mint tokens', async() => {
            await token.mint(accounts[0], 'https://www.token-uri.com/nft')
            //It should increase Total Supply
            result = await token.totalSupply()
            assert.equal(result.toString(), '1', 'total supply is correct')
            
            //It increments owners Balance
            result = await token.balanceOf(accounts[0])
            assert.equal(result.toString(), '1', 'balanceOf is correct')

            //Token should belong to owner
            result = await token.ownerOf('1')
            assert.equal(result.toString(), accounts[0].toString(), 'ownerOf is correct')
            result = await token.tokenOfOwnerByIndex(accounts[0], 0)

            //Owner can see all tokens
            let balanceOf = await token.balanceOf(accounts[0])
            let tokenIds = []
            for(let i = 0; i < balanceOf; i++){
               let id = await token.tokenOfOwnerByIndex(accounts[0], i)
               tokenIds.push(id.toString())
            }
            let expected = ['1']
            assert.equal(tokenIds.toString(), expected.toString(), 'tokenIds are correct' )
            
            //TokenURI Correct
            let tokenURI = await token.tokenURI('1')
            assert.equal(tokenURI, 'https://www.token-uri.com/nft')
        })
    })


})
