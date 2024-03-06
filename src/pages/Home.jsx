import React from 'react'
import Bitcoin from '../components/Bitcoin'


const home = () => {
  return (
    <div className='w-full h-screen bg-silver pl-[56px] pr-[56px] pt-[28px] '>
        <span className='text-[14px] text-gray '>Cryptocurrencies &gt;&gt; </span>
        <span className='text-[14px]'>Bitcoin</span>
        <Bitcoin/>
       
        
      
    </div>
  )
}

export default home
