import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="container section__margin">
      
            <div className="footer-heading section__padding">
                <h1 className="gradient__text">Do you want to step into the crypto market</h1>
            </div>
      
            <div className="footer-btn">
                <a href='/tswap'>Join Now</a>
            </div>

            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                   <div className="row">
{/* first */}
                       <div className="col-6 col-lg-3">
                           <h4>Company</h4>
                           <ul>
                               <li>
                                   <a href="">Terms & Conditions</a>
                               </li>
                               <li>
                                   <a href="">Privacy Policy</a>
                               </li>
                               <li>
                                   <a href="">Contact</a>
                               </li>
                               <li>
                                   <a href="">About</a>
                               </li>
                           </ul>
                      </div>
{/* second */}
                      <div className="col-6 col-lg-3">
                           <h4>Software</h4>
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
                           <h4>Services</h4>
                           <ul>
                               <li>
                                   <a href="">Token Swap</a>
                               </li>
                               <li>
                                   <a href="">GameFi</a>
                               </li>
                               
                           </ul>

                       </div>
{/* fourth */}
                       <div className="col-6 col-lg-3 text-right text-center footer__icons ">
                           <h4>Follow Us</h4>
                           <div className="row mt-4">
                               <div className="col-3 mx-auto">
                                   <a href="">
                                       <i className="fab fa-facebook fontawesome-style "></i>
                                   </a>
                               </div>
                               <div className="col-3 mx-auto">
                                   <a href="">
                                       <i className="fab fa-instagram fontawesome-style gradient__text"></i>
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
                   <div className="mt-5 footer-reserved ">
                       <p className="main-hero-para text-center w-100">© 2021 CryptoBlock. All rights reserved.</p>
                   </div>

                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer
