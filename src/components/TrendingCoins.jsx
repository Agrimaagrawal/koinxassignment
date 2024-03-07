import React,{useState,useEffect} from 'react'
import frame from '../assets/Frame.png'
import { trendingCoins } from '../config/api';
import axios from 'axios';

const TrendingCoins = () => {
    const [trendingcoin,setTrendingcoin]=useState([]);
    const trendingcoindata=async()=>{
        const {data}= await axios.get(trendingCoins);
        setTrendingcoin(data.coins)


    }
    useEffect(()=>{
        trendingcoindata();
    },[])
    console.log(trendingcoin)
  return (
    <>
    <div className='  md:w-[426px] h-[515px] bg-bblue rounded-md flex flex-col justify-center items-center'>
        <div className='w-[268px] text-white text-center text-[24px]'>Get Started with KoinX for FREE</div>
        <div className='w-[327px] h-[68px] text-[14px] text-center text-white mt-7'>
        With our range of features that you can equip for free,
               KoinX allows you to be more educated and aware of your tax reports.
        </div>
        <img src={frame} className='mt-4'></img>
        <button className='w-[273px] bg-white h-[48px] rounded-lg font-semibold mt-5'>Get Started for FREE &rarr;</button>
      
    </div>
    <div className='md:w-[426px] h-[225px] p-5 bg-white rounded-lg mt-6'>
        <div className='w-[246px] h-[29px] text-black text-[24px] font-bold '>Trending Coins (24h)</div>
        <div className='w[379px]'>
            {
                trendingcoin&&trendingcoin.map((i,index)=>{
                    console.log(index)
                    if(index<3){
                        return(
                            <div key={i.item.coin_id} className="flex m-6 ml-4">
                                <div className='h-[24px] w-[24px]'><img src={i.item.thumb}></img></div>
                            <div className=' h-[24px] ml-2 text-[16px] text-black font-bold'>{i.item.name}</div>
                            <span className={`md:w-[84px] md:h-[28px] p-1 text-[16px] rounded-md text-darkgreen  bg-lightgreen ml-16 md:ml-40 `}>&#9650;{i.item.data.price_change_percentage_24h.usd&&i.item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
                            </div>
                        )
                    }
                })
            }

        </div>

    </div>
    </>
  )
}

export default TrendingCoins

