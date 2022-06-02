import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import '../App.css'
import Web3 from 'web3'
import Token from '../../abis/Token.json'
import EthSwap from '../../abis/EthSwap.json'
import Footer from '../containers/Footer'
import Moralis from 'moralis';

const serverUrl = "https://icx8vlippczk.usemoralis.com:2053/server";
const appId = "WFkh6QztmKA9JromTEdEEFMkSSxXKLu8wym2cvIa";
  Moralis.start({ serverUrl, appId });
  let user = Moralis.User.current();

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

     
    

    if(user){
      document.getElementById('login').innerHTML = user.get('ethAddress');
      this.setState({ loading : false });
    }else{
      console.log("Login Error");
    }

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
      window.location.reload();
      this.setState({loading: false})
      })
  }

  sellTokens =(tokenAmount)=>{
    this.setState({loading: true})
    this.state.token.methods.approve(this.state.ethSwap.address, tokenAmount).send({ from: this.state.account}).on('transactionHash', (hash) =>{
       this.state.ethSwap.methods.sellTokens(tokenAmount).send({ from: this.state.account}).on('transactionHash', (hash) =>{
        window.location.reload();
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
    
    let content;
    
    if(this.state.loading){
      content = <a id="loader" className="text-center" style={{color:"white",fontSize:"35px"}}> Loading...</a>
    }else{
      content = <Main 
                ethBalance={this.state.ethBalance}
                tokenBalance={this.state.tokenBalance}
                buyTokens={this.buyTokens}
                sellTokens={this.sellTokens}
                />
    }

    if(!user){
        content = <a id="loader" className="text-center" style={{color:"white",fontSize:"35px"}}> Please Login through Metamask...</a>
    }
 
    
    
    async function login() {
      
      if (!user) {
      try {
          user = await Moralis.authenticate()
          console.log(user)
          console.log(user.get('ethAddress'));
          document.getElementById('login').innerHTML = user.get('ethAddress');
          window.location.reload();  
          
      } catch(error) {
          console.log(' error hello')
      }
      }else{
          console.log('user exists!!');
          document.getElementById('login').innerHTML = user.get('ethAddress');
      }
    }
    
    async function logout() {
      await Moralis.User.logOut();
      console.log("logged out");
      window.location.reload();
    }  

    return (
      <>
       
        {/* <Navbar account={this.state.account}/> */}

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Token Swap</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" >Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/tswap">Token Swap</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="homeg">GameFi</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
       <ul className="navbar-nav px-3">
           
        </ul>

        <button className='btn btn-primary' id='login' onClick={() => login()}>Login</button>
        <button className='ml-2 btn btn-secondary' onClick={() => logout()}>Logout</button>
    
     </nav>

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
