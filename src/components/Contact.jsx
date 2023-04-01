import React from 'react'
import Call from '../assets/Call.png';
import Clock from '../assets/Time.png';
import Email from '../assets/Email.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';

const Contact = () => {
  return (
    <div>
      <div className=' w-full h-[1058] bg-[#091242] ' >
        <div className='mt-[100px] flex justify-center' >
            <div className=' w-[353px] h-[433px] mt-[80px] mr-[35px]'>
            <p className=' w-[75px] h-[23px] text-[14px] font-normal leading-[16px] border-l-[2px] border-l-yellow-500 text-white'>Contact Us</p>
          <h1 className=' w-[343px] h-[41px] font-semibold text-[35px] leading-[41px] text-white mt-[15px] '>Get In Touch With Us</h1>
          <p className=' w-[353px] h-[72px] font-medium text-base text-white mt-3'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
          
         <div className=' flex font-medium text-xs text-white mt-[22px]'>
         <img src={Email} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' w-[150px] h-[38px] py-[13.5px] ml-2'>Email <br /> contact@logistics.com</p>
         </div>
         <div className=' flex font-medium text-white text-xs mt-[22px]'>
         <img src={Call} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' h-[40px] w-[107px] py-[13.5px]  ml-2'>Call Us <br /> (00) 112 365 489</p>
            </div>
            <div className=' flex font-medium text-white text-xs mt-[22px]'>
         <img src={Clock} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' w-44 h-10 py-[13.5px] ml-2'>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
         </div>
        </div>
       <div className=' w-[758px] h-[468px] mt-[100px]  bg-[#091242]'>
          <div className=' grid grid-cols-2 gap-4 '>
            <input type='name' placeholder='  Your Name*' className=' placeholder:m-2 w-[365px] h-[60px] border border-[#4E5683] bg-transparent' />
            <input type='Email' placeholder='  Email*' className=' w-[365px] h-[60px] border border-[#4E5683] bg-transparent' />
            <input type='Phone' placeholder='  Phone Number*' className=' w-[365px] h-[60px] border border-[#4E5683] bg-transparent' />
            <input type='City' placeholder='  City*' className=' w-[365px] h-[60px] border border-[#4E5683] bg-transparent' />
          </div>
          <div>
            <textarea placeholder='  Your Message' className='  w-[758px] h-[154px] border border-[#4E5683] mt-[31px] bg-transparent '></textarea>
            <button className=' bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% hover:from-[#FFD7A6] hover:to-[#FFB629] w-[194px] h-[60px] text-black mt-[30px] text-[16px] font-semibold leading-[22px]  align-top'>Submit Messages</button>
          </div>
       </div>
    </div>
      <div className=' flex justify-center  h-[234px] mt-[10px]'>
        <img src={Image2} alt='/' className=' w-[301px] h-[194px]' />
        <img src={Image3} alt='/' className=' w-[301px] h-[194px]' />
        <img src={Image4} alt='/' className=' w-[301px] h-[194px]' />
        <img src={Image5} alt='/' className=' w-[301px] h-[194px]' />
       </div>
    </div>
    </div>
  )
}

export default Contact