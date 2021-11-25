//Importing Smart Contracts
const Token = artifacts.require('Token');
const EthSwap = artifacts.require('EthSwap');

//Require 'Chai' for testing
require('chai').use(require('chai-as-promised')).should()

//Helper function
function tokensConvertor(n){
    return web3.utils.toWei(n,'ether') //converts normal currency to Wei(tokens)
}

contract('EthSwap', ([deployer, investor])=>{
   //checking smart-contracts was deployed to the network
   //defining variable which are used more than once in below code
   let token, ethSwap;
   before(async()=>{
     token = await Token.new()
     ethSwap = await EthSwap.new(token.address)
     //Transfering all tokens from Token to EthSwap (1 million)
     //using helper function here
     await token.transfer(ethSwap.address,tokensConvertor('1000000'))     
   }) 
   
    //Test-1
    describe('EthSwap deployment', async()=>{
      it('contract has a name', async()=>{  
        const name = await ethSwap.name()
        assert.equal(name,'EthSwap Instant Exchange')
      })
   })

    //Test-2
    describe('Token deployment', async()=>{
        it('contract has a name', async()=>{
        const name = await token.name()
        assert.equal(name,'Kundu Token')
        })
    })

    //Test-3
    describe('Token transfer', async()=>{
        it('contract has tokens', async()=>{
            let balance = await token.balanceOf(ethSwap.address)
            assert.equal(balance.toString(),tokensConvertor('1000000'))  
        })
    })

    //Test-4
    describe('buyTokens()', async()=>{
      let result;

      before(async()=>{
        //Purchase tokens before each example
        result = await ethSwap.buyTokens({from : investor, value:`${tokensConvertor('1')}`})
       })
        it('User can Instantly purchase tokens from ethSwap for fix Amount', async()=>{
            //Checking investor balance after token purchase
            let investorBalance = await token.balanceOf(investor)
            assert.equal(investorBalance.toString(), tokensConvertor('100'))

            //Check ethSwap balance after purchase tokens
            let ethSwapBalance
            ethSwapBalance = await token.balanceOf(ethSwap.address)
            assert.equal(ethSwapBalance.toString(), tokensConvertor('999900'))
            ethSwapBalance = await web3.eth.getBalance(ethSwap.address)
            assert.equal(ethSwapBalance.toString(), web3.utils.toWei('1','ether'))

            //console.log(result.logs[0].args)
            //cross-check all the details of transaction after purchase event occurred
            const event = result.logs[0].args;
            assert.equal(event.account, investor)
            assert.equal(event.token, token.address)
            assert.equal(event.amount.toString(), tokensConvertor('100').toString())
            assert.equal(event.rate.toString(), '100') 
        })
    })

      //Test-5
      describe('sellTokens()', async()=>{
        let result;
  
        before(async()=>{
           //Investor must approve tokens before purchase
           await token.approve(ethSwap.address,tokensConvertor('100'), {from:investor})
           //Investor sells tokens to get ether
           result = await ethSwap.sellTokens(tokensConvertor('100'), {from:investor})
        })
          it('User can Instantly sell tokens to ethSwap for fix Amount', async()=>{
            //Checking investor balance after token sell
            let investorBalance = await token.balanceOf(investor)
            assert.equal(investorBalance.toString(), tokensConvertor('0'))
            
            //Check ethSwap balance after sell tokens
            let ethSwapBalance
            ethSwapBalance = await token.balanceOf(ethSwap.address)
            assert.equal(ethSwapBalance.toString(), tokensConvertor('1000000'))
            ethSwapBalance = await web3.eth.getBalance(ethSwap.address)
            assert.equal(ethSwapBalance.toString(), web3.utils.toWei('0','ether'))

            //cross-check all the details of transaction after sell event occurred
            const event = result.logs[0].args;
            assert.equal(event.account, investor)
            assert.equal(event.token, token.address)
            assert.equal(event.amount.toString(), tokensConvertor('100').toString())
            assert.equal(event.rate.toString(), '100') 
 
            //Failure: investor can't sell(exchange) more than they have
            await ethSwap.sellTokens(tokensConvertor('500'), {from:investor}).should.be.rejected;
          })
      })

})