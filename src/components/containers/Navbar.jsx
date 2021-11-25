import React from 'react'
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Moralis from 'moralis';

//BEM - Block Modifier Modifier

// const Moralis = require('moralis');
const Navbar = () => {

    const serverUrl = "https://qwuyzxeeoosg.usemoralis.com:2053/server";
    const appId = "jSxVvRARdVv3Sfp1dq1WJ47EHreGWTllFKJcn1MY";
    Moralis.start({ serverUrl, appId });

  async function login(){
    const user = await Moralis.authenticate();
    console.log(user.get('ethAddress'));
    document.querySelector('.btn').innerHTML = user.get('ethAddress');
    
  }

const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
               <div className="gpt3__navbar-links_logo">
                   <img src='./assets/navR.png' alt="logo"/>
               </div>
               {/* <h3>Cap-Chain</h3> */}
               <div className="gpt3__navbar-links_container">
                     <p><a href="#home">Home</a></p>
                     <p><a href="#about">About</a></p>
                     <p><a href="#coins">Coins</a></p> 
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
                     <p><a href="#news">News</a></p>
               </div>
            </div>
            <div className="gpt3__navbar-sign">
                {/* <p id='login'></p> */}
                <button type="button" className='btn' id='login' onClick={() => login()}>Connect Wallet</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu  ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
                  : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gtp3__navbar-menu_container-links">
                                <p><a href="#home">Home</a></p>
                                <p><a href="#home">Services</a></p>
                                <p><a href="#home">About Us</a></p>
                                <p><a href="#home">News</a></p>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <button type="button" className="btn" id='login' onClick={() => login()}>Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>
            
        </div>
    )
}

export default Navbar
