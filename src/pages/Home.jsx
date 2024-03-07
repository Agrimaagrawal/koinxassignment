import React from 'react'
import Bitcoin from '../components/Bitcoin'
import MiniNav from '../components/MiniNav'
import TrendingCoins  from '../components/TrendingCoins'
import Performance from '../components/Performance'
import Sentiment from '../components/Sentiment'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Team from '../components/Team'
import Youmayalsolike from '../components/Youmayalsolike'




const home = () => {
  return (
    <>
    <div className='w-full h-full bg-silver pl-[10px] pr-[10px] md:pl-[56px] md:pr-[56px] pt-[28px] grid grid-cols-1 gap-x-[500px] md:grid-cols-2 '>
        <div className=''>
        <span className='text-[14px] text-gray '>Cryptocurrencies &gt;&gt; </span>
        <span className='text-[14px]'>Bitcoin</span>
        
        <Bitcoin/>
        <MiniNav/>
        <Performance/>
        <Sentiment/>
        <About/>
        <Tokenomics/>
        <Team/>
        <Youmayalsolike/>
      
       
        </div>
        <div className='mt-[42px] '>
            <TrendingCoins/>
        </div>
       
        
      
    </div>
    
    </>
  )
}

export default home
