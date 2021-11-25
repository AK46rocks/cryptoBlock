import React from 'react'
import '../App.css'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">The Gateway to Instant Exchange Cryptos with Ethereum </h1>
      <p>Swapping cryptos allows you to easily exchange one crpto asset for another,either full or small amounts. With no fiat currency involved. It's fast and easy way to Instant exchange cryptos.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src='./assets/people.png' />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src='./assets/exR.png' />
    </div>
  </div>    
  )
}

export default Header
