import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Row, Select, Typography, Col, Avatar, Card, Space} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNews'
// import Footer from './Footer'
import { Navbar } from '.'

const {Title, Text} = Typography;
const { Option } = Select;
const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({simplified}) => {
    const count = simplified ? 6:10;
    const [news, setNews] = useState([]);     
    const {data:cryptoNews, isFetching} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});
    // console.log(isFetching);
         

    useEffect(() => {
        if(isFetching === false){
            // console.log('loading...')
            const arr = cryptoNews.value;
            setNews(arr)
            // console.log(news);
        }
        
        
    },[isFetching, cryptoNews] )

    return (
      <>
        
    <section className='news-sec'>
      <div className="news">
        
        {!simplified && (
            <>
           <Navbar/> 
          </>
        )}

        <div className="home-heading-container d-flex justify-content-between">
              <Title level={2} className='home-title'>Latest Crypto News</Title>
              <Title level={4} className='show-more'><Link to='/news'>Show more</Link></Title>         
         </div>
    
        <Row gutter={[24, 24]}>
            {news.map((bathmi)=>(
                <Col xs={24} sm={12} lg={8} >
                    <Card hoverable className="news-card">
                        <a href={bathmi.url} target='_blank' rel="noreferrer">
                           <div className="news-image-container d-flex">
                               <Title className='news-title' level={3}>{bathmi.name}</Title>
                               <img src={bathmi.image && bathmi.image.thumbnail && bathmi.image.thumbnail.contentUrl || demoImage}
                                    style={{ maxWidth:'200px', maxHeight:'100px' }}
                                   alt="news" 
                                />
                           </div>
                           <p>
                               {bathmi.description > 100 
                                   ? `${bathmi.description.substring(0, 100)}...`
                                   :bathmi.description
                               }
                           </p>
                           <div className="provider-container">
                               <div>
                                   <Avatar src={bathmi.provider[0] && bathmi.provider[0].image && bathmi.provider[0].image.thumbnail && bathmi.provider[0].image.thumbnail.contentUrl || demoImage} alt="news" />
                                    <Text className="provider-name" style={{fontWeight:'bold',color:'blueviolet'}}>{bathmi.provider[0].name}</Text>
                               </div>
                               <Text style={{color:'blueviolet'}}>{moment(bathmi.datePublished).startOf('ss').fromNow()}</Text>
                           </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>

        </div>
        </section>
         {/* <Footer/>         */}
     </>
  )
}

export default News
