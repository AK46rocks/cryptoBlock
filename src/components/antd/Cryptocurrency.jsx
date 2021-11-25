import React  from 'react'
import { useState, useEffect } from 'react'
import { Row, Card, Col, Input,Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import { Footer, Navbar } from '.'


const {Title} = Typography;
const Cryptocurrency = ({ simplified }) => {

        const count = simplified ? 8:50;
        const [coins, setCoins] = useState([]);
        const {data:cryptoList, isFetching} = useGetCryptosQuery(count);    
        
        useEffect(() => {
            if(isFetching === false){
            const arr = cryptoList.data && cryptoList.data.coins;
            setCoins(arr)
            console.log(arr);
            }
        }, )
        
        
    
    return (
        <>
           {!simplified && (
               <>
               <Navbar/>
               </>
           )}
        <div className="coin-section">
          <div className="home-heading-container d-flex justify-content-between">
              <Title level={2} className='homecoin-t'>Top <span className='colour'>Cryptocurrencies</span> In The <span className='colour'>World</span></Title>
              <Title level={4} className='show-more'><Link to='/cryptocurrency'>Show more</Link></Title>
          </div>
        
            <Row gutter={[32,32]} className='crypto-card-container'>
                {coins.map((currency) => (
                     <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                     <Link to={`/crypto/${currency.id}`}>
                         <Card
                            title={<b style={{fontSize:'2.5rem'}}>{`${currency.rank}. ${currency.name}`}</b>}
                            extra={<img className='crypto-image' src={currency.iconUrl}></img>}
                            className='main-card'
                            bordered={true}
                          >
                             <p>Price: {millify(currency.price)} $</p>
                             <p>Market Cap: {millify(currency.marketCap)}</p>
                             <p>Daily Changes: {millify(currency.change)} %</p>
                         </Card>
                     </Link>
                 </Col>
                 ))} 
                 
            </Row>
            </div>
            {/* <Footer/> */}
        </>
    )
 
}

export default Cryptocurrency
