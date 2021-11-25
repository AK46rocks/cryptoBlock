import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify'

const CoinList = () => {

    const [coins, setCoins] = useState([]);
        const {data:cryptoList, isFetching} = useGetCryptosQuery(10);    
        console.log(cryptoList);
        useEffect(() => {
            if(isFetching === false){
            const arr = cryptoList.data && cryptoList.data.coins;
            setCoins(arr)
            // console.log(arr);
            }
        }, )

    return (
        <>
           <div className="list__container section__padding" id='coins'>
               <div className="list__title">
                   <h1 className="gradient__text" data-aos='fade-down'>
                       Top 10 Cryptocurrencies 
                   </h1>
                   <h2 className='list__live ml-3' data-aos="fade-down">(<span>.</span> Live)</h2>
               </div>
               <div className="list__table">
                   <table className='table'>
                       <thead>
                           <tr>
                               <th scope='col'>#</th>
                               <th scope='col'>Coin</th>
                               <th scope='col'>Price</th>
                               <th scope='col'>24h</th>
                           </tr>
                       </thead>
                       <tbody>
                       {coins.map((currency) => (
                           <tr>
                               <td>{currency.rank}</td>
                               <td><img className='crypto-image' src={currency.iconUrl}/>&nbsp;&nbsp;{ currency.name}</td>
                               <td>$&nbsp;{millify(currency.price)}</td>
                               <td>{millify(currency.change)} %</td>
                           </tr>
                        ))}    
                       </tbody>
                   </table>
               </div>
           </div> 
        </>
    )
}

export default CoinList

