import React, { useEffect } from 'react'
import { Header, Navbar } from '../containers/';
import '../App.css';
import Brand from './Brand';
import What from './What';
import CoinList from './CoinList';
import Nft from './Nft';
import CTA from './CTA';
import News from './News';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            offset:400,
            duration:2000,
        });

    }, [])


    return (
        <div className='App'>
            <div className="gradient_bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <What/>
            <CoinList/>
            <Nft/>
            <CTA/>
            <News/>
            <Footer/>
        </div>
    )
}

export default Home
