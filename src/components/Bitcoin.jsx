import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { bitCoin } from '../config/api';
import bitcoin from '../assets/bitcoin.png'

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
    <div className='w-[881px] h-[711px] bg-white p-[25px] mt-[20px] rounded-md  '>
        <div className='flex '>
        <img src={bitcoin} className='h-[40px]'></img>
        <span className='p-1 pl-2 text-[24px] font-bold text-black'>Bitcoin</span>
        <span className='p-2  text-lightgray font-bold text-[16px]'>BTC</span>
        <div className='w-[80px] h-[40px] bg-gray2 text-white p-2 rounded-md ml-6'>Rank #1</div>
        </div>
         <div className='mt-[32px]'>
            <span className='text-[28px] font-bold '>${coin.usd &&coin.usd.toLocaleString()}</span>
            <span className='w-[84px] h-[28px] p-1 text-[16px] rounded-md text-darkgreen bg-lightgreen ml-8'>&#9650;{coin.usd_24h_change&&coin.usd_24h_change.toFixed(2)}%</span>
            <span className='text-grey text-[14px] ml-5'>(24H)</span>
        </div>
        <div><span className='text-[16px] mt-4 text-black font-semibold' >&#8377; {coin.inr&&coin.inr.toLocaleString()}</span></div>
        <hr className='mt-6 text-grey'></hr>

      
    </div>
  )
}

export default Bitcoin
