import React,{useState,useEffect} from 'react'
import ReactSlider from '../components/RangeSlider'
import axios from 'axios';
import { CoinList } from '../config/api';
import iicon from '../assets/SVG.png'


const Performance = () => {
  const [bitcoin,setbitcoin]=useState([]);
    
    const bitcoind=async()=>{
        const {data}= await axios.get(CoinList)
          
        
        setbitcoin(data);



    }
    useEffect(()=>{
        bitcoind();
    },[])
   console.log(bitcoin)
  return (
    <>
    
    <div className='md:w-[881px] md:h-[632px] bg-white p-7 mt-4 id="Performance'>
        <div className='text-[24px] text-black font-bold'>Performance</div>
        
        <div className='md:w-[830px] md:h-[172px]'>
          <div className='flex md:w-[830px] mt-4 justify-between'>
            <div className='md:w-[116px]'>
              <div className='text-[13.78px] text-black2'>Today's Low</div>
              <div className='text-[15.63px] text-black2'>{bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()}</div>
             
            </div>
            <div className='md:w-[598.8px]'><ReactSlider fixedvalue={bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()} min={bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()} max={bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}/></div>
            <div className='md:w-[115.6px] pl-3'>
              <div className='text-[13.78px] text-black2'>Today’s High</div>
              <div className='text-[15.63px] text-black2'>{bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}</div>
             
            </div>
          </div>
          <div className='flex md:w-[830px] mt-4 justify-between'>
            <div className='md:w-[116px]'>
              <div className='text-[13.78px] text-black2'>52W Low</div>
              <div className='text-[15.63px] text-black2'>{bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()}</div>
             
            </div>
            <div className='md:w-[598.8px]'><ReactSlider fixedvalue={bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()} min={bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()} max={bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}/></div>
            <div className='md:w-[115.6px] pl-3'>
              <div className='text-[13.78px] text-black2'>52W High</div>
              <div className='text-[15.63px] text-black2'>{bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}</div>
             
            </div>
          </div>
          

        </div>
        <div className='md:w-[820px] md:h-[306px] mt-10 md:mb-4 md:mt-4 '>
          <div className='text-[18.91px] text-black2 flex'>Fundamentals <img src={iicon}></img></div>
          <div className='md:w-[820px] md:h-[270px] flex gap-6 md:flex-row flex-col'>
          <div className='md:w-[383px] md:h-[270px] mt-3'>
            <div className='md:w-[343px] h-[54px] flex '>
              <div className='text-[14px] text-grey'>Bitcoin Price</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].current_price&&bitcoin[0].current_price.toLocaleString()}</div>
            </div>
           
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>24h Low / 24h High</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()}/{bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}</div>
              
            </div>
            
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>7d Low / 7d High</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].low_24h&&bitcoin[0].low_24h.toLocaleString()}/{bitcoin[0]&&bitcoin[0].high_24h&&bitcoin[0].high_24h.toLocaleString()}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>Trading Volume</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].total_volume&&bitcoin[0].total_volume.toLocaleString()}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>Market Cap Rank</div>
              <div className='text-[13px] text-black3 text-right ml-40'>#1</div>
            </div>

          </div>
          <div className='md:w-[383px] md:h-[270px] mt-3'>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>Market Cap</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].market_cap&&bitcoin[0].market_cap.toLocaleString()}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>Market cap Dominance</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].market_cap_change_percentage_24h&&bitcoin[0].market_cap_change_percentage_24h.toFixed(3)}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>Volume / Market Cap</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].total_volume&&bitcoin[0].total_volume.toLocaleString()}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>All-Time High</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].total_volume&&bitcoin[0].total_volume.toLocaleString()}</div>
            </div>
            <div className='md:w-[343px] h-[54px] flex'>
              <div className='text-[14px] text-grey'>All-Time Low</div>
              <div className='text-[13px] text-black3 text-right ml-40'>${bitcoin[0]&&bitcoin[0].total_volume&&bitcoin[0].total_volume.toLocaleString()}</div>
            </div>

          </div>
          </div>


        </div>
        
         
          

       
      
    </div>
    </>
  )
}

export default Performance
