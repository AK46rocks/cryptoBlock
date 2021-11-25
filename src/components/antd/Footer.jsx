import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                   <div className="row">
{/* first */}
                       <div className="col-6 col-lg-3">
                           <h2>Company</h2>
                           <ul>
                               <li>
                                   <a href="">Coins</a>
                               </li>
                               <li>
                                   <a href="">Exchanges</a>
                               </li>
                               <li>
                                   <a href="">News</a>
                               </li>
                               <li>
                                   <a href="">About</a>
                               </li>
                           </ul>
                      </div>
{/* second */}
                      <div className="col-6 col-lg-3">
                           <h2>Software</h2>
                           <ul>
                               <li>
                                   <a href="">Truffle</a>
                               </li>
                               <li>
                                   <a href="">Solidity</a>
                               </li>
                               <li>
                                   <a href="">Ganache</a>
                               </li>
                               <li>
                                   <a href="">Metamask</a>
                               </li>
                           </ul>

                       </div>
{/* third */}
                       <div className="col-6 col-lg-3">
                           <h2>Services</h2>
                           <ul>
                               <li>
                                   <a href="">Token Swap</a>
                               </li>
                               <li>
                                   <a href="">NFT Game</a>
                               </li>
                               
                           </ul>

                       </div>
{/* fourth */}
                       <div className="col-6 col-lg-3 text-right text-center ">
                           <h2>Follow Us</h2>
                           <div className="row mt-4">
                               <div className="col-3 mx-auto">
                                   <a href="">
                                       <i className="fab fa-facebook fontawesome-style"></i>
                                   </a>
                               </div>
                               <div className="col-3 mx-auto">
                                   <a href="">
                                       <i className="fab fa-instagram fontawesome-style"></i>
                                   </a>
                               </div>
                               <div className="col-3 mx-auto">
                                   <a href="">
                                       <i className="fab fa-twitter fontawesome-style"></i>
                                   </a>
                               </div>
                           </div>
                       </div>


                   </div>

                   <hr className='line' />
                   <div className="mt-5 ">
                       <p className="main-hero-para text-center w-100">Copyright @ 2021 SsPay. All Rights reserved.</p>
                   </div>

                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer
