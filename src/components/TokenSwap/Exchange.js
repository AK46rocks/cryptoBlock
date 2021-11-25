import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import '../App.css'
import Web3 from 'web3'
import Token from '../../abis/Token.json'
import EthSwap from '../../abis/EthSwap.json'
import Footer from '../containers/Footer'

class Exchange extends Component {

  //using default function of Reactjs to load Web3 at very start
  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData(){
    const web3 = window.web3
    
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]})
    console.log("Account Address",this.state.account);

    const ethBalance = await web3.eth.getBalance(this.state.account);
    this.setState({ethBalance});
    console.log("Ether Balance",window.web3.utils.fromWei(this.state.ethBalance,'ether'));
    
    //Load Token
    const networkId = await web3.eth.net.getId()  
    const tokenData=Token.networks[networkId]
    if(tokenData){
      const token = new web3.eth.Contract(Token.abi, tokenData.address)
      console.log(token);
      this.setState({ token })
      //user Kundu token balance show
      let tokenBalance = await token.methods.balanceOf(this.state.account).call() 
      console.log("Token Balance:", tokenBalance.toString());
      this.setState({ tokenBalance : tokenBalance.toString() })
      console.log("Token Balance Set:", this.state.tokenBalance);
      
    }else{
      window.alert('Token contract not deployed to detected network')
    }

    //Load EthSwap 
    const ethSwapData= EthSwap.networks[networkId]  //Error
    if(ethSwapData){
      const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
      console.log('EthSwap Contract:',ethSwap);
      this.setState({ ethSwap })       
    }else{
      window.alert('EthSwap contract not deployed to detected network')
    }

     
    this.setState({ loading : false })
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


  buyTokens =(etherAmount)=>{
    this.setState({ loading:true })
    this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account}).on('transactionHash', (hash) =>{
      this.setState({loading: false})
    })
  }

  sellTokens =(tokenAmount)=>{
    this.setState({loading: true})
    this.state.token.methods.approve(this.state.ethSwap.address, tokenAmount).send({ from: this.state.account}).on('transactionHash', (hash) =>{
       this.state.ethSwap.methods.sellTokens(tokenAmount).send({ from: this.state.account}).on('transactionHash', (hash) =>{
         this.setState({loading: false})
       })
    })
  }
  

  constructor(props){
    super(props)
    this.state = {
      account:'',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading){
      content = <a id="loader" className="text-center">Loading...</a>
    }else{
      content = <Main 
                ethBalance={this.state.ethBalance}
                tokenBalance={this.state.tokenBalance}
                buyTokens={this.buyTokens}
                sellTokens={this.sellTokens}
                />
    }
    

    return (
      <>
       
        <Navbar account={this.state.account}/>
        <div className="container-fluid tswap__container">
          <div className="row">
            <div role="main" className="col-md-6 offset-md-3 col-12 d-flex main-token">
              <div className="content mr-auto ml-auto">
                
                {content}                                

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Exchange;
