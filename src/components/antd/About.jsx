import React from 'react'

const About = () => {
    return (
        <>
         <section className='about-container'>
            <div className="container main-about">
                <div className='text-center about-t'>
                   <h1>About<span className='to-color'>Us</span></h1>
                        <p>--------A commercial website that lists wallets exchanges and other ethereum related info--------</p>
                </div>
                 <div className="row">
                     
                     <div className="col-12 col-lg-6 left-about">
                     <img src='./images/logo4.jpeg'
                            alt="heroing"
                            className="img-fluid"
                            />
                     </div>
                     <div className="clo-12 col-lg-6 right-about">
                         <h2>WE ARE <span>CRYPTO</span>BLOCK</h2>
                        <p> A place for everyone who wants to simply buy and sell tokens using Ethereums.
                            Deposit funds in your Ethereum wallet using your Visa/MasterCard or bank transfers.Instant
                            buy/sell of Tokens at fixed rate is guaranteed,Nothing extra. 
                            Join over 700,000 users from all over the world satisfied with our services.
                        </p>
                        <div className="titles d-flex justify-content-around mt-5 mb-5">
                            <h4>SECUE</h4>
                            <h4>RELIABLE</h4>
                            <h4>CONVENIENCE</h4>
                        </div>
                        <p> Ethereum is based on a protocol known as the blockchain,
                            which allows to create, transfer and verify ultra secure
                            financial data without interference of third parties.
                        </p>

                     </div>
                 </div>
            </div>       
         </section>
          
        </>
    )
}

export default About
