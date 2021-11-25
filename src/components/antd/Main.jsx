import React from 'react'

const Main = () => {
    return (
        <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
{/* first Column */}
                        <div className="col-12 col-lg-8 header-left-side
                        d-flex justify-content-center 
                        flex-column align-items-start
                        order-lg-first order-last">
                            <h1 className="display-2">
                            <span >ETHEREUM</span> EXCHANGE <br/>
                                YOU CAN <span >TRUST</span>
                            </h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti nobis, consectetur dicta amet quis sint earum ducimus pariatur reprehenderit repellat 
                            eveniet hic! Dignissimos laboriosam eaque inventore modi, 
                            atque quae.
                            </p>
                            
                        </div>

    {/* second column */}
                        <div className="col-12 col-lg-4 header-right-side
                        d-flex justify-content-center 
                        align-items-center
                        main-herosection-images
                        order-md-first order-sm-first">
                            <img src='./images/bit2.jpg'
                            alt="heroing"
                            className="img-fluid"
                            />
                            {/* <iframe src="https://giphy.com/embed/Wu4TiWLLFqxk4KMRiU" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ethereum-eth-ether-Wu4TiWLLFqxk4KMRiU">via GIPHY</a></p> */}
                                               
                        </div>
                    </div>
                </section>
            </header>
      
        </>
    )
}

export default Main
