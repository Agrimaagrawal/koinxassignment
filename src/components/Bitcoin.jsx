import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { bitCoin } from '../config/api';
import bitcoin from '../assets/bitcoin.png'
import TradingChart from './TradingChart';

const Bitcoin = () => {
    const [coin,setCoin]=useState({});
    
    const bitcoindata=async()=>{
        const {data}= await axios.get(bitCoin);
        setCoin(data.bitcoin)


    }
    useEffect(()=>{
        bitcoindata();
    },[])
    console.log(coin)
  return (
    <div className='w-auto h-auto lg:w-[881px] lg:h-[711px] bg-white p-[25px] mt-[20px] rounded-md  '>
        <div className='flex '>
        <img src={bitcoin} className='h-[40px]'></img>
        <span className='p-1 pl-2 text-[24px] font-bold text-black'>Bitcoin</span>
        <span className='p-2  text-lightgray font-bold text-[16px]'>BTC</span>
        <div className='w-[80px] md:h-[40px]  bg-gray2 text-white p-2 rounded-md ml-6'>Rank #1</div>
        </div>
         <div className='mt-[32px]'>
            <span className='text-[28px] font-bold '>${coin.usd &&coin.usd.toLocaleString()}</span>
           
            <span className={`md:w-[84px] md:h-[28px] p-1 text-[16px] rounded-md text-darkgreen   ml-4 md:ml-8 ${coin.usd_24h_change&&coin.usd_24h_change>0?'bg-lightgreen':'bg-lightright'} `}>&#9650;{coin.usd_24h_change&&coin.usd_24h_change.toFixed(2)}%</span>
            <span className='text-grey text-[14px] ml-2 md:ml-5'>(24H)</span>
        </div>
        <div><span className='text-[16px] mt-4 text-black font-semibold' >&#8377; {coin.inr&&coin.inr.toLocaleString()}</span></div>
        <hr className='mt-6 text-grey'></hr>
        <div className=' w-auto h-auto lg:w-[838px] lg:h-[460px]'>
            <div className='flex md:flex-row flex-col justify-between p-4 pl-0 font-bold'>
            <span className='text-[16px] '>Bitcoin Price Chart (USD)</span>
            <div className='text-[5px] md:text-[13px] text-gray2 flex gap-4'><span>1H </span><span>24H</span> <span className='text-blue'>7D</span> <span>1M</span> <span>3M</span> <span>6M</span> <span>1Y</span> ALL</div>
            </div>
            <TradingChart/>
        </div>

      
    </div>
  )
}

export default Bitcoin
