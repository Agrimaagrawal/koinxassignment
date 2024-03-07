import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa"


const Tokenomics = () => {
    const data = {
        labels: ["CrowdSale 80%", "Foundation 20%"],
        datasets: [
          {
            data: [80, 20],
            backgroundColor: ["#0082FF", "#FAA002"],
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        
        
      };
  return (
    <div className='md:w-[881px] md:h-[539px] p-[24px] rounded-lg mt-5  bg-white'>
        <div className='text-[24px] text-black font-bold'>Tokenomics</div>
        <div>
            <div className='text-[20px] mt-6 font-bold mb-7'>Initial Distribution</div>
            <div className='flex'><div className='md:w-[177px] h-[179px]'><Doughnut data={data} options={options} /></div>
            <div className='m-6 '><div className='text-[16px] flex'>Crowdsale investors: 80%</div>
            <div className='text-[16px] m-6'>Foundation: 20%</div></div>
            </div>
            
        </div>
        <div className='md:w-[833px] md:h-[156px] text-[16px] mt-9'>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </div>
      
    </div>
  )
}

export default Tokenomics
