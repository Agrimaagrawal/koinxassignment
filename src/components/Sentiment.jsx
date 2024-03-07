import React from 'react'
import iicon from '../assets/SVG.png'
import pic from '../assets/pic1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import analysis from '../assets/analysis.png';

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

const Sentiment = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
         
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
         
        ]
      };
  return (
    <div className=' w-auto md:w-[881px] h-[556px] mt-4 p-7  bg-white id="Sentiment'>
        <div className='text-[24px] font-bold text-black'>Sentiments</div>
      <div className='text-[18.91px] text-black2 flex mt-4'>Key Events <img src={iicon} className="w-[20px] h-[20px] mt-1 ml-1"></img></div>
      <Slider {...settings}>
      <div className=' w-auto md:w-[456px] h-[250px] bg-lightblue p-5 flex gap-3 rounded-md mt-3 '>
        <img src={pic} className='h-[44px] w-[44px]'></img>
        <div className='w-[368px] h-[148px]'>
            <div className='h-[40px] mb-2 text-[14px] text-darkblack font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
            <div className='h-[100px] text-[14px]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
        </div>
      </div>
      <div className='md:w-[456px] h-[250px] bg-lightblue p-7 flex gap-3 rounded-md mt-3 '>
        <img src={pic} className='h-[44px] w-[44px]'></img>
        <div className='w-[368px] h-[148px]'>
            <div className='h-[40px] mb-2 text-[14px] text-darkblack font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
            <div className='h-[100px] text-[14px]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
        </div>
      </div>
      <div className='md:w-[456px] h-[250px] bg-lightblue p-7 flex gap-3 rounded-md mt-3'>
        <img src={pic} className='h-[44px] w-[44px]'></img>
        <div className='w-[368px] h-[148px]'>
            <div className='h-[40px] mb-2 text-[14px] text-darkblack font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
            <div className='h-[100px] text-[14px]'>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
        </div>
      </div>
      </Slider>
      <div className='md:w-[710px] h-[186px] mt-2'>
        <img src={analysis}></img>
      </div>
    </div>
  )
}

export default Sentiment
