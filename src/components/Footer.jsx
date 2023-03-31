import React from 'react'
import Logo from '../assets/Logo.png';
import Call from '../assets/Call.png';
import Email from '../assets/Email.png';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/Linkdin.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/Twitter.svg';

const Footer = () => {
  return (
    <div>
        <div>
            <div className=' bg-FooterBg w-full h-[412px] mt-[100px]'></div>
            <div className=' bg-[#091242] w-full h-[562px]'>
                <nav className=' flex justify-center items-center gap-32 bg-white bg-opacity-25 h-[78px]'>
                   <div className=' bg-[#091242] -ml-[500px] h-[78px] flex items-center justify-center '>
                    <img src={Logo} alt='/' className='w-[210px] h-[36px] top-4 mr-[30px]  '  />
                    </div>
                    <ul className=' flex justify-between -ml-[120px] text-white'>
                    <li className=' ml-6 w-[74px] h-[30px] font-medium text-2xl'>Pages</li>
                    <li className=' ml-6 w-[74px] h-[30px] font-medium text-2xl'>Utility</li>
                    <li className=' ml-6 w-[74px] h-[30px] font-medium text-2xl'>Subscribe</li>
                    </ul>
                </nav>
                <div className=' flex'>
                    <div>
                    <p className=' text-[#E8E8E8] text-base font-medium w-[319px] h-[92px] text-left align-top mt-[39px] leading-6 '>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <div className=' flex font-medium text-xs text-white mt-[22px]'>
         <img src={Email} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' w-[150px] h-[38px] py-[13.5px] ml-2'>Email <br /> contact@logistics.com</p>
         </div>
         <div className=' flex font-medium text-white text-xs mt-[22px]'>
         <img src={Call} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' h-[40px] w-[107px] py-[13.5px]  ml-2'>Call Us <br /> (00) 112 365 489</p>
            </div>
                    </div>
                    <div className=' flex justify-center ml-24'>
                    <div className=' text-white ml-16 mt-[20px] '>
                    <ul className='  gap-14 w- my-[] h-[22px] ml-[] '>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Project</li>
            <li>Pricing</li>
            <li>Contact</li>
                    </ul>
                    </div>
                    <div className=' text-white ml-6 mt-[20px]'>
                    <ul className='  gap-14 w- my-[] h-[22px] ml-[] '>
                    <li>StyleGuide</li>
                        <li>License</li>
                        <li>Changelog</li>
                        <li>Password</li>
                       <li>Contact</li>
                     </ul>
                    </div>
                    </div>
                </div>
                
                <div className=' float-right -mt-[280px] mr-[420px]'>
                <input type='City' placeholder='City*' className=' w-[365px] h-[60px] border border-[#4E5683] bg-transparent' />
                <div>
                <button className=' bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% hover:from-[#FFD7A6] hover:to-[#FFB629] w-[194px] h-[60px] text-black mt-[20px] text-[16px] font-semibold leading-[22px]  align-top'>Send Now</button>
                </div>
                <ul className=' flex mt-3 ml-[120px] gap-2'>
                <li><img src={Facebook} alt='/' className=' w-[20px] h-[20px]'  /></li>
            <li><img src={Twitter} alt='/'  className=' w-[20px] h-[20px]'  /></li>
            <li><img src={LinkedIn} alt='/' className=' w-[20px] h-[20px]'  /></li>
            </ul>
          </div>
                </div>
                <div className=' flex justify-center bg-[#091242] gap-4 h-[40px] border-t-2 border-[#8388A7] '>
                    <h1 className=' text-white'>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</h1>
                    <ul className=' flex gap-4 text-[#8388A7] '>
                        <li>StyleGuide</li>
                        <li>License</li>
                        <li>Changelog</li>
                        <li>Password</li>
                    </ul>
                </div>
            </div>
        </div>
    
  )
}

export default Footer