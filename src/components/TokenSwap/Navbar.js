import React from 'react'
import Identicon from 'identicon.js';
import '../App.css'
// import useMoralis from 'react-moralis';
import Moralis from 'moralis';


const Navbar = ({account}) => {

  //  const { authenticate } = useMoralis();
    const serverUrl = "https://wvim2a5fxrco.usemoralis.com:2053/server";
    const appId = "QrqwpM5Ng6JVbPfqEgulY4icpvMms9ccvRcvkRs7";
    Moralis.start({ serverUrl, appId });


  async function login() {
    let user = Moralis.User.current();
    if (!user) {
    try {
        user = await Moralis.authenticate()
        console.log(user)
        console.log(user.get('ethAddress'));
        document.getElementById('login').innerHTML = user.get('ethAddress');
        
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
            {/* <li>
            <a style={{paddingRight:'20px'}}>{account}</a>
                  {account
                    ?
                     <img 
                      className="ml-2"
                      width='30'
                      height='30' 
                      src={`data:image/png;base64,${new Identicon(account, 30).toString()}`} 
                      alt="" 
                     />
                    : <span></span>
                  }
            </li> */}
        </ul>

        <button className='btn btn-primary' id='login' onClick={() => login()}>Login</button>
        <button className='ml-2 btn btn-secondary' onClick={() => logout()}>Logout</button>
    
     </nav>

    );
  
}

export default Navbar;
   