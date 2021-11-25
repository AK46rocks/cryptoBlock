import React, { useEffect } from 'react'

const Nft = () => {

    

    return (
        <>
            <div className="nft__container section__padding" id="game">
                <div className="nft__image" data-aos="fade-right">
                    <img src="../assets/nfts.png" alt="nftImg" />
                </div>
                <div className="nft__content" data-aos="zoom-in-up">
                    <h4>Here's a great opportunity to earn NFT's</h4>
                    <h1 className='gradient__text'>Collect unique and existing NFT's by just playing simple and easy Games.</h1>
                    <p>The play-to-earn model rewards players with cryptocurrency and works with blockchain technology in some form. Non-fungible tokens (NFT) is simply just digital "Art Work" using blockchain and on the other hand, Here NFT's are digital certificates for intellectual property, which could be utilized for many aspects of a game.</p>
                    <h4>Hurry up!! and start collecting them</h4>
                </div>
                
            </div>
        </>
    )
}

export default Nft
