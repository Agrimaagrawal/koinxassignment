import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const MiniNav = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
    <div className='hidden md:flex p-8 pl-0 pb-3  text-[16px] text-textblack gap-8 font-semibold '>
      <div className=' hover:text-bblue  cursor-pointer'>
        Overview
      </div>
     
      <div className=' hover:text-bblue cursor-pointer '>
      Fundamentals
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      News Insights
      </div>
      <div className=' hover:text-bblue  cursor-pointer'>
      Sentiments
      </div>
      <div className=' hover:text-bblue  cursor-pointer'>
      Team
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      Technicals
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      Tokenomics
      </div>

    </div>
    <div className='md:hidden  p-8 pl-5 pb-3 text-[10px] text-textblack  font-semibold '>
    <Slider {...settings}>
      <div className=' hover:text-bblue  cursor-pointer'>
        Overview
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      Fundamentals
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      News Insights
      </div>
      <div className=' hover:text-bblue  cursor-pointer'>
      Sentiments
      </div>
      <div className=' hover:text-bblue  cursor-pointer'>
      Team
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      Technicals
      </div>
      <div className=' hover:text-bblue cursor-pointer '>
      Tokenomics
      </div>
      </Slider>
    </div>
    
    
   
    
    
    </>
  )
}

export default MiniNav
