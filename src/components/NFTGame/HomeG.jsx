import React from 'react'
import './Game.css';

const HomeG = () => {

    window.onload = function() {

        window.addEventListener('scroll', function(e) {
          
          let s = this.scrollY;
          let w = this.outerWidth;
          let h = document.getElementsByClassName('paralax')[0].clientWidth;
          let h_b = document.getElementsByClassName('container')[0].clientWidth;
          let p = s/h*100;
          let p_b = s/h_b*100;
          let opas = 1-1/100*p_b;
          let z_1 = 1 + (w / 10000 * p_b);
          document.getElementsByClassName('p-item4')[0].style= `transform: scale(${z_1});opacity: ${opas}`;
          let z_2 = 1+(w/5000000*p);
          document.getElementsByClassName('p-item1')[0].style= `transform: scale(${z_2})`;
          let hr = w/2000*p_b;
          let z_3 = 1+(w*0.000005*p_b);
          document.getElementsByClassName('p-item2')[0].style= `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
          let hr_2 = w/1500*p_b;
          let z_4 = 1+(w*0.00001*p_b);
          document.getElementsByClassName('p-item3')[0].style= `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
        })
        
      }
      

    return (
        <>
<nav class="navbar homeg__nav navbar-expand-lg navbar-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <div className="gpt3__navbar-links_logo">
         <img src='./assets/navR.png' alt="logo"/>
     </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/tswap">Token Swap</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/homeg">GameFi</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

            <div className="paralax">
                <div className="paralax-item p-item1"></div>
                <div className="paralax-item p-item2"></div>
                <div className="paralax-item p-item3"></div>
                <div className="paralax-item p-item4"></div>
            </div>



            <div className="scroll-down">
               <h1 className='text-center'>Scroll down <br /><h2>&#8595; &#8595;</h2></h1>
            </div>
          <div className="container homeg__container">
                <div className="content-header">
                    <h1>Game On</h1>
                    <h2 className='mt-2'>Test your Memory by playing simple games</h2>
                </div>

         <div className="content homeg__content">
                <section className='about-container'>
            <div className="container main-about">
                <div className='text-center about-t'>
                   <h1>Choose what you want to play</h1>
                        <p>--------It's time to show how good your memory is ?--------</p>
                </div>
                 <div className="row">
                     
                     <div className="col-12 col-lg-6 left-about">
                     <img src='./nftImg/fbanner.png'
                            alt="banner"
                            className="img-fluid"
                            />
                     </div>
                     <div className="clo-12 col-lg-6 right-about">
                         
                        <div className="titles d-flex justify-content-around mt-5 mb-5">
                            <div className="card homeg__card cric__card">
                                <div className='card-header'>
                                    <h5><a href='/cric'>Crickters</a></h5>
                                    <p>Match the pairs and get lastest NFT's of your favourite crickters.</p>
                                </div>
                            </div>
                            <div className="card homeg__card">
                                <div className='card-header'>
                                    <h5><a href='/game' >Food</a></h5>
                                    <p>Match the pairs and get lastest NFT's of your favourite food items.</p>
                                </div>
                            </div>
                            <div className="card homeg__card">
                                <div className='card-header'>
                                    <h5><a href='/game'>Politicians</a></h5>
                                    <p>Match the pairs and get lastest NFT's of your favourite politicians.</p>
                                </div>
                            </div>
                        </div>
                        <p className='game-info'> Match pairs of pictures and find out how good is your memory! Train your memory, concentration, accuracy.
                        In these games, you must quickly determine whether a flashcard symbol matches the one presented 2 times previously.  
                        </p>

                     </div>
                 </div>
            </div>       
         </section>
                </div>
            </div>
        </>
    )
}

export default HomeG
