import React,{useState} from 'react'
import logo from '../assets/logo.jpg'
import {FiAlignJustify} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <div className=' bg-tblue w-full  flex justify-between p-6 font-sans h-[80px] '>
    < img src={logo} className='h-[20px] w-[80px] mt-1  '/>
        <div className='absolute right-6  text-3xl text-tgreen md:hidden 'onClick={()=>setOpen(!open)}>
         {open?<FiX/>:<FiAlignJustify/>}
      </div>
      <div className= {`md:flex gap-7  md:mt-0 absolute md:static md:bg-tblue md:w-auto md:z-auto z-[10] left-0 w-full h-[500px] md:h-0 md:pl-0 pl-16 transition-all ease-in-out duration-500 ${open?'top-16':'top-[-500px]'}`}>
  
              <div className="hover:underline cursor-pointer m-20 md:mt-1 md:ml-0 md:mr-0 text-[16px] font-bold text-textblack" >CryptoTaxes</div>
              <div className="hover:underline cursor-pointer m-20 md:mt-1 md:ml-0 md:mr-0 text-[16px] font-bold text-textblack">Free Tools</div>
              <div className="hover:underline cursor-pointer m-20 md:mt-1 md:ml-0 md:mr-0 text-[16px] font-bold text-textblack">Resource Center</div>
              <button className="bg-gradient-to-r from-blue to-darkblue w-[136px] h-[40px] text-white rounded-md ml-16 md:m-0 ">Get Started</button>
              </div>
      
         
    
  </div>
  )
}

export default Navbar
