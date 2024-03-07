import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <>
    <div className='md:w-[881px]  h-auto md:h-[995px] p-[24px] rounded-md bg-white mt-5'>
      <div className='text-[24px] text-black font-bold '>About Bitcoin</div>
      <div className='mt-6 md:w-[830px] md:h-[110px]'>
        <div className='text-[18px] text-black font-bold'>What is Bitcoin?</div>
        <div className='mt-2'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>
        <hr className='text-silver mt-3'></hr>
      </div>
      <div className='md:w-[830px] md:h-[360px]'>
        <div className='text-[18px] text-black font-bold mt-5'>Lorem ipsum dolor sit amet</div>
        <div className='text-[16px]'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</div>

<div className='mt-4'>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</div>

<div className='mt-4'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>

      </div>
      <hr className='text-silver mt-5'></hr>
      <div className='md:w-[807px] md:h-[206px] h-auto'>
        <div className='text-[24px] text-black font-bold mt-5'>Already Holding Bitcoin?</div>
        <div className='md:w-[807px] md:h-[151px] mt-5 flex gap-7 md:flex-row flex-col'>
          <div className='md:w-[383px] md:h-[151px] rounded-lg p-5  gap-4 flex bg-gradient-to-r from-gradientlightgreen to-gradientblue '>
            <img className='md:w-[128px] nd:h-[128px] w-[50px] rounded-md ' src={about1}></img>
            <div >
              <div className='text-[20px] text-white font-bold'>Calculate your Profits</div>
              <button className='md:w-[132px] md:h-[32px] bg-white rounded-md mt-3'>Check Now &rarr;</button>
            </div>
          </div>
          <div className='md:w-[383px] md:h-[151px] rounded-lg p-5  gap-4 flex bg-gradient-to-r from-gradientlred to-gradientdred '>
            <img className='md:w-[128px] nd:h-[128px] w-[50px] rounded-md ' src={about2}></img>
            <div >
              <div className='text-[20px] text-white font-bold'>Calculate your tax liability</div>
              <button className='md:w-[132px] md:h-[32px] bg-white rounded-md mt-3'>Check Now &rarr;</button>
            </div>
          </div>
          
        </div>
        <hr className='text-silver mt-5'></hr>
        
        <div className='md:w-[830px] md:h-[130px] text-[16px] text-gray mt-5'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui

</div>

      </div>
      
    </div>
    </>
  )
}

export default About
