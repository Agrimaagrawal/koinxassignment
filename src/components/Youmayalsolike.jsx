import React,{useState,useEffect} from 'react'
import { trendingCoins } from '../config/api';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "silver" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "silver" }}
        onClick={onClick}
      />
    );
  }


const Youmayalsolike = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
       slidesToScroll: 1,
       nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
        
       
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
         
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };
    const [trendingcoin,setTrendingcoin]=useState([]);
    const trendingcoindata=async()=>{
        const {data}= await axios.get(trendingCoins);
        setTrendingcoin(data.coins)


    }
    useEffect(()=>{
        trendingcoindata();
    },[])
  return (
    <div className='md:w-[1300px] mt-4 md:h-[628px] bg-white md:absolute static w-full p-10'>
        <div className='text-[24px] text-black font-bold '>You May Also Like</div>
        <div className='md:w-[1300px] mt-6'>
           
        <Slider {...settings}>
        {trendingcoin&&trendingcoin.map((i)=>{
           
            return (
                <div className='border-silver border-2 rounded-lg  w-[252px ] h-[160px] p-4 '>
                      <span className='h-[26px] w-[26px] absolute '><img src={i.item.thumb}></img></span>
                      <span className='   text-[16px] text-black font-bold ml-7'>{i.item.name}</span>
                      <span className={`  text-[16px] rounded-md text-darkgreen  bg-lightgreen `}>&#9650;{i.item.data.price_change_percentage_24h.usd&&i.item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
                      <div className='mt-3 text-[20px] font-bold text-black'>{i.item.data.price&&i.item.data.price.toLocaleString()}</div>
                      <div><img src={i.item.data.sparkline}></img></div>
                </div>
            )
        })}
       
       </Slider>
       </div>
       <div className='text-[24px] text-black font-bold mt-6 '>Trending Coins</div>
       <div className='md:w-[1300px] mt-6'>
           
        <Slider {...settings}>
        {trendingcoin&&trendingcoin.map((i)=>{
           
            return (
                <div className='border-silver border-2 rounded-lg  w-[252px ] h-[160px] p-4 '>
                      <span className='h-[26px] w-[26px] absolute '><img src={i.item.thumb}></img></span>
                      <span className='   text-[16px] text-black font-bold ml-7'>{i.item.name}</span>
                      <span className={`  text-[16px] rounded-md text-darkgreen  bg-lightgreen `}>&#9650;{i.item.data.price_change_percentage_24h.usd&&i.item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
                      <div className='mt-3 text-[20px] font-bold text-black'>{i.item.data.price&&i.item.data.price.toLocaleString()}</div>
                      <div><img src={i.item.data.sparkline}></img></div>
                </div>
            )
        })}
       
       </Slider>
       </div>
    </div>
  )
}

export default Youmayalsolike

