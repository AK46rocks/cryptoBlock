import React, { useEffect, useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNews';
import moment from 'moment'

const demoImage = "./assests/blog02.png";
const News = () => {
    const count = 6;
    const [news, setNews] = useState([]);     
    const {data:cryptoNews, isFetching} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});
        //  console.log(cryptoNews);

    useEffect(() => {
        if(isFetching == false){
            // console.log('loading...')
            const arr = cryptoNews.value;
            
            setNews(arr)
            // console.log(arr);
        }
        
        
    },[isFetching, cryptoNews] )


    return (
        <>
            <div className="news__container section__padding" id='news'>
                <div className="news__title">
                    <h1 className='gradient__text' data-aos='fade-left'>
                        A lots happening, Get Latest News Here.
                    </h1>
                </div>
                <div className="news__content">
                    <div className="news__card">

                    {news.map((bathmi)=>(
                          <div className="news__article" data-aos='zoom-in-down'>
                              <div className="news__image">
                                  <img src={bathmi.image && bathmi.image.thumbnail && bathmi.image.thumbnail.contentUrl || demoImage} 
                                  alt="newsImg" 
                                  />
                              </div>
                              <div className="news__article-content">
                                  <div>
                                      <p>{moment(bathmi.datePublished).startOf('ss').fromNow()}</p>
                                      <h3>{bathmi.name}</h3>
                                  </div>
                                  <a href={bathmi.url}>Read Full Article</a>
                              </div>
                          </div>
                    ))}

                    

                    </div>
                </div>
            </div>
        </>
    )
}

export default News
