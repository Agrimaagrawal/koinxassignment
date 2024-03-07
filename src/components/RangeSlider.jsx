import React, { useState } from 'react';
import '../styles/style.css'

const RangeSlider = ({fixedvalue,min,max}) => {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
console.log(min)
  const gradientStops = [
    { color: '#FF4949', percent: '0%' },
    { color: '#FF4E11', percent: '20%' },
    { color: '#FC870A', percent: '40%' },
    { color: '#FFAF11', percent: '60%' },
    { color: '#C2CB21', percent: '80%' },
    { color: '#11EB68', percent: '100%' }
  ];

  const gradient = `linear-gradient(to right, ${gradientStops
    .map((stop) => `${stop.color} ${stop.percent}`)
    .join(', ')})`;

  const triangleStyle = {
    borderTopColor: 'black'
  };

  return (
    <div className="w-full  px-4">
      <input
        type="range"
        min={min}
        max={max}
        value={fixedvalue}
        onChange={handleChange}
        className="w-full h-[4.36px] bg-gradient-to-r from-transparent to-transparent appearance-none"
        style={{ background: gradient }}
      />
      <div
        className="relative mt-2 "
        style={{ width: '100%', height: '10px' }}
      >
        <div
          className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-4"
          style={{
            left: `calc(${(fixedvalue/ max) * 100}% - 0.5rem)`
          }}
        >
         <div className="">&#9650;</div>
          <div className="text-xs font-bold absolute top-10 left-0 transform -translate-x-1/2 -translate-y-full">
            {fixedvalue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
