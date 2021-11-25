import React, { Component } from 'react'
import millify from 'millify';
import { Typography, Space, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrency, News } from '.'

import '../App.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import About from './About';
//import Exchange from './TokenSwap/Exchange'
// import { Routes , Route, Link} from 'react-router-dom'
// import { Layout, Typography, Space } from 'antd'
// import { Navbar,Exchanges,Homepage,Cryptocurrency,CryptoDetails,News } from './frontend'


const { Title } = Typography;

 const Homepage = () => {

    const responseInfo = useGetCryptosQuery(10);
    // console.log("Response info:", responseInfo)
    // console.log('Data:',responseInfo.data)
    // console.log('Data2:',responseInfo.data && responseInfo.data.data)
    // console.log('Data3:',responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats)
    // console.log('Data4:',responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.total)
    const totalCoins = responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.total
    const totalExchanges= responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.totalExchanges
    const totalMarketCap =responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.totalMarketCap
    const total24hVolume =responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.total24hVolume
    const totalMarkets =responseInfo.data && responseInfo.data.data && responseInfo.data.data.stats && responseInfo.data.data.stats.totalMarkets 

    return (
        <>

       <Navbar/>   
       <Main/> 
       <About/>      
        
        <div className="home-heading-container">
          <Title level={2} className="heading">Global CryptoCurrency Statistics</Title>
          <div className="info-title">
          <Row>
              <Col span={12}><Statistic id='currency' title="Total Cryptocurrencies" value={totalCoins}/></Col>
              <Col span={12}><Statistic title="Total Exchanges" value={totalExchanges}/></Col>
              <Col span={12}><Statistic title="Total Market Cap" value={Math.round(totalMarketCap)}/></Col>
              <Col span={12}><Statistic title="Total 24h Volume" value={Math.round(total24hVolume)}/></Col>
              <Col span={12}><Statistic title="Total Markets" value={totalMarkets}/></Col>
          </Row>
          </div>
        </div>
        
          <Cryptocurrency simplified />
          
          <News simplified/>
               
        
        <Footer/>
            
       </>
    )
  
}

export default Homepage;
