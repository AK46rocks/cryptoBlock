import React from 'react'
import Identicon from 'identicon.js';
import '../App.css'

const Navbar = ({account}) => {
 
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
            <li>
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
            </li>
        </ul>
     </nav>

    );
  
}

export default Navbar;    