import React from 'react';
import Logo from '../assets/Logo.png';
import Call from '../assets/Call.png';
import Clock from '../assets/Time.png';
import Email from '../assets/Email.png';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/Linkdin.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/Twitter.svg';
import Truck from '../assets/Truck.svg';
import Plank from '../assets/Plank.svg';
import Plane from '../assets/Plane.svg';
import Plane2 from '../assets/Plane2.svg';
import Pattern from '../assets/Pattern.png'

const Top = () => {
  return (
    <div className=' w-full'>
      {/* Header */}
       <div className=' flex  bg-[#091242] justify-center h-40 text-white'>
         <div className=' flex justify-between w-[1200px] py-[46px] h-[68px] mx-[180px]'>
         <div className=' mr-[44px] py-[16px]'>
         <img src={Logo} alt='/' className='w-[210px] h-[36px] top-4 '  />
         </div>
         <div className=' flex'>
         <div className=' flex font-medium text-xs ml-[21px]'>
         <img src={Clock} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' w-44 h-10 py-[13.5px] ml-2'>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
         </div>
         <div className=' flex font-medium text-xs ml-[19px]'>
         <img src={Email} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' w-[150px] h-[38px] py-[13.5px] ml-2'>Email <br /> contact@logistics.com</p>
         </div>
         <div className=' flex font-medium text-xs ml-[19px]'>
         <img src={Call} alt='/' className=' w-[63px] h-[63px] py-[2.5px]' /> 
         <p className=' h-[40px] w-[107px] py-[13.5px]  ml-2'>Call Us <br /> (00) 112 365 489</p>
         </div>
         </div>
       </div> 
       </div>
        {/* navbar */}
       <div className='bg-Banner bg-cover bg-opacity-100 bg-blend-luminosity w-full h-[995px] '>
        <div className=' bg-black bg-opacity-25 w-full h-[78px] flex '>
        <nav className=' flex h-[78px] bg-NavbarBg  justify-center gap-[255px] '>
          <ul className=' flex gap-6 w- my-[30px] h-[22px] ml-[182px] '>
            <li dir='rtl' className=' border-s-[1px] border-white pr-[30px]'>Home</li>
            <li dir='rtl' className=' border-s-[1px] border-white pr-[30px]'>About</li>
            <li dir='rtl' className=' border-s-[1px] border-white pr-[30px]'>Pages</li>
            <li dir='rtl' className=' border-s-[1px] border-white pr-[30px]'>Project</li>
            <li dir='rtl' className=' border-s-[1px] border-white pr-[30px]'>Contact</li>
          </ul>
          <ul className='flex gap-4 my-[30px]  h-[22px] mr-2 '>
            <li><img src={Instagram} alt='/' className=' w-[20px] h-[20px]' /></li>
            <li><img src={Facebook} alt='/' className=' w-[20px] h-[20px]'  /></li>
            <li><img src={Twitter} alt='/'  className=' w-[20px] h-[20px]'  /></li>
            <li><img src={LinkedIn} alt='/' className=' w-[20px] h-[20px]'  /></li>
          </ul>
        </nav>
        <span className=' bg-NavbarBg'>
        <button className='
             w-[216px] h-[78px] text-[16px] font-semibold  text-[#140e28] bg-white ml-10 align-top text-center'>
            Request Quote
        </button>
        </span>
        </div>
        {/* Services */}
        <div className=' w-[571px] mt-[136px] ml-[182px] h-[406px] text-white'>
          <p className=' bg-[#041C37] w-[190px] mb-[3px] font-normal text-xs my-[3px] ml-[2px] '><span className=' border-l-4 border-x-yellow-500' ></span>Logistics & Supply Chain Solutions</p>
          <h1 className='w-[554px] h-[213px] text-[60px] font-bold leading-[71px] align-top text-left'>Your Gateway <br /> to any Destination in the World</h1>
          <p className=' w-[571px] h-[72px] mt-[6px] text-[16px] leading-6 font-medium align-top text-left'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.</p>
          <button className=' bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% hover:from-[#FFB629] hover:to-[#FFFFFF] w-[194px] h-[60px] text-black mt-6 text-[16px] font-semibold leading-[22px]  align-top'>Explore More</button>
        </div>
       </div>
       <div className=' flex justify-center w-[1200px] h-[311px] text-left align-top mx-[150px] my-[121px]'>
          <div className=' flex-col text-[#1C1F35] text-left align-top '>
            <p className=' border-l-2 border-l-yellow-500 bg-[#E8E8E8] w-[92px] h-[23px] pl-1 text-[14px] leading-[17px] font-normal '>What We Do</p>
            <h1 className=' font-semibold text-[35px] leading-[41px] w-[294px] h-[93px] mt-[18px]'>Safe & Reliable Cargo Solutions</h1>
          </div>
          <div className=' grid  grid-cols-2 w-[873px] h-[311px] gap-[10px]'>
            <div className=' flex w-[383px] gap-4 h-[115px]'>
            <img src={Plane} alt='/' className=' w-[49px] h-[53px]' />
            <span className=' border-l-[1px] border-l-[#D8D8D8] mr-[20px]'></span>
            <div className=' flex-col'>
            <h1 className=' w-[267px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35]'>Sea Transport Services</h1>
            <p className=' w-[270px] h-[72px] mt-[13px] text-[16px] leading-6 text-[#666C89]'>Following the quality of our service thus having gained trust of our many clients.</p>
            </div>
            </div>
            <div className=' flex w-[383px] gap-4 h-[115px]'>
            <img src={Plank} alt='/' className=' w-[57px] h-11' />
            <span className=' border-l-[1px] border-l-[#D8D8D8] mr-[20px]'></span>
            <div className=' flex-col'>
            <h1 className=' w-[256px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35]'>Warehousing Services</h1>
            <p>Following the quality of our service thus having gained trust of our many clients.</p>
            </div>
            </div>
            <div className=' flex w-[383px] gap-4 h-[115px]'>
            <img src={Plane2} alt='/' className='w-[50px] h-[65px] ' />
            <span className=' border-l-[1px] border-l-[#D8D8D8] mr-[20px]'></span>
            <div className=' flex-col'>
            <h1 className=' w-[257px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35]'>Air Fright Services</h1>
            <p>Following the quality of our service thus having gained trust of our many clients.</p>
            </div>
            </div>
            <div className=' flex w-[383px] gap-4 h-[115px]'>
            <img src={Truck} alt='/' className=' w-[57px] h-[62px]' />
            <span className=' border-l-[1px] border-l-[#D8D8D8] mr-[20px]'></span>
            <div className=' flex-col'>
            <h1 className=' w-[277px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35]'>Local Shipping Services</h1>
            <p>Following the quality of our service thus having gained trust of our many clients.</p>
            </div>
            </div>
          </div>
       </div>
       </div>
  )
}

export default Top