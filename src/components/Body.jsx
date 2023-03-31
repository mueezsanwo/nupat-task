import React from 'react';
import Delivery from '../assets/Delivery.svg';
import TravelCost from '../assets/TravelCost.svg';
import Airplane from '../assets/Airplane.png';
import Pattern1 from '../assets/Pattern 1.svg';
import Pattern2 from '../assets/Pattern 2.svg';
import Photo1 from '../assets/Photo1.png';
import Photo2 from '../assets/Photo2.png';
import Photo3 from '../assets/Photo3.png';
import Photo4 from '../assets/Photo4.png';
import Photo5 from '../assets/Photo5.png';
import Left from '../assets/Left.svg';
import Right from '../assets/Right.svg';
import Photo6 from '../assets/photo6.png';
import Photo7 from '../assets/Photo7.png';
import Stars from '../assets/Star.png';
import Icon from '../assets/Icon.svg';

const Body = () => {
  return (
    <div>
      <div className=' bg-AboutBg w-full h-[504px]  '></div>
      <div className=' w-[1200px] h-[502px] flex justify-center items-center mx-auto -mt-16  bg-white'>
        <div className=' align-top text-left ml-[50px]'>
          <p className=' w-[64px] bg-[#E8E8E8] h-[23px] text-[14px] font-normal leading-[16px] border-l-[2px] border-l-yellow-500 text-[#1c1F35] py-[3px] pl-2'>Why Us</p>
          <h1 className=' w-[472px] h-[82px] font-semibold text-[35px] leading-[41px] text-[#1c1F35] mt-[15px]'>We provide full range global logistics solution</h1>
          <p className=' w-[464px] h-[144px] font-medium text-base text-[#666C89] mt-3'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. 

         Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <div className=' flex-col gap-x-2'>
        <div className=' flex h-[58px] gap-2'>
          <img src={Delivery} alt='/' className=' w-[58px] h-[58px]' />
          <p className=' w-[192px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35] pt-[14px]'>Delivery on Time</p>
        </div>
        <div className=' flex h-[58px] gap-2'>
          <img src={TravelCost} alt='/' className=' w-[58px] h-[58px] mt-3'  />
          <p className=' w-[252px] h-[30px] font-normal text-[25px] leading-[30px] text-[#1C1F35] pt-[26px] '>Optimized Travel Cost</p>
        </div>
        </div>
        </div>
        <img src={Airplane} alt='/' className=' mr-[50px]' />
      </div>
      <div className=' w-[1020px] h-[143px] flex justify-center items-center mx-auto  bg-white border-t-2 border-t-[#D4D4D4] border-b-2 border-b-[#D4D4D4] mt-[100px] mb-[50px]'>
        <div className=' border-r-2 border-r-[#D4D4D4] flex w-[326px] h-[143px] gap-4'>
          <h1 className=' mt-[46px] w-[120px] h-[59px] text-[50px] font-semibold leading-[59px] text-[#1C1F35] '>1294</h1>
          <img src={Pattern1} alt='/' className=' w-[17px] h-[17px]  mt-[67px]' />
          <p className=' mr-8 w-[157px] h-[18px] mt-[66px] font-normal text-[16px] leading-[18px] text-[#1C1F35]  '>Delivered Packages</p>
        </div>
        <div className=' flex h-[143px] gap-4 '>
          <h1 className=' mt-[46px] w-[120px] h-[59px] text-[50px] font-semibold leading-[59px] text-[#1C1F35] ml-[122px] '>3594</h1>
          <img src={Pattern2} alt='/' className=' w-[17px] h-[17px] mt-[67px] ' />
          <p className=' w-[133px] h-[18px] mt-[66px] font-normal text-[16px] leading-[18px] text-[#1C1F35] '>Satisfied Clients</p>
        </div>
      </div>
      {/* Projects */}
      <div>
        <div className=' w-[1672] h-[484px] mt-4  '>
          <h1 className=' w-[524px] h-[41px] font-semibold text-[35px] leading-[41px] flex justify-center mx-auto align-top text-center text-[#1C1F35] mt-32 '>Transporting Across The World</h1>
          <div className=' flex gap-[18px] justify-center mt-8'>
            <img src={Photo1} alt='/' className=' w-[240px] h-[280px] ' />
            <img src={Photo2} alt='/' className=' w-[240px] h-[280px] ' />
            <img src={Photo3} alt='/' className=' w-[240px] h-[280px] ' />
            <img src={Photo4} alt='/' className=' w-[240px] h-[280px] ' />
            <img src={Photo5} alt='/' className=' w-[240px] h-[280px] ' />
          </div>
        </div>
        <div className='w-full bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% h-[400px]  -mt-52 flex justify-center'>
        <button className=' bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% hover:from-[#FFD7A6] hover:to-[#FFB629] w-[194px] h-[60px] text-black mt-[100px] text-[16px] font-semibold leading-[22px]  align-top'>More Work</button>
        </div>
      </div>
      {/* Testimonial */}
      <div className=' flex-col justify-center items-center mx-auto w-[1200px] h-[542px] mt-28'>
        <p className=' w-[97px] h-[23px] pl-[4px] border-l-[2px] border-l-yellow-500 bg-[#E8E8E8] text-[#1C1F35] '>Testimonial</p>
        <div className=' flex mt-4'>
          <h1 className=' w-[534] h-[41px] font-semibold text-[35px] leading-[41px] text-[#1C1F35] '>What Our Customer Say</h1>
          <div className=' flex w-[97px] gap-2 h-[44px] ml-[720px]'>
          <img src={Left} alt='/' className=' w-[43px] h-[43px]' />
          <img src={Right} alt='/' className=' w-[43px] h-[43px]' />
          </div>
        </div>
        <div className=' w-[1200px] h-[425px] flex mt-10 '>
          <div className=' w-[600px] h-[425px] bg-[#F4F4F4]'>
             <div className='flex ml-[72px] '>
               <img src={Photo6} alt='/' className=' rounded-full w-[91px] h-[91px] mt-[62px] ' />
               <div className=' text-[#091242] mt-[82px] ml-2'>
              <p className=' w-[148px] h-[24px] font-medium text-[20px] leading-[24px] '>KathLeen Smith</p>
              <p className=' w-[106px] h-[24px] font-medium text-base '>Fuel Company</p>
             </div>
               <img src={Icon} alt='/' className=' w-[73px] h-[73px] ml-[100px] mt-[72px] ' />
             </div>
             <p className=' ml-[72px] font-medium text-base text-left align-top mt-[44px]' >Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
             <img src={Stars} alt='/' className=' ml-[72px] mt-[32px]' />
          </div>
          <div className=' w-[600px] h-[425px] bg-[#091242] '>
          <div className='flex ml-[72px] '>
               <img src={Photo7} alt='/' className=' rounded-full w-[91px] h-[91px] mt-[62px] ' />
               <div className=' text-white mt-[82px] ml-2'>
              <p className=' w-[148px] h-[24px] font-medium text-[20px] leading-[24px] '>John Martin</p>
              <p className=' w-[106px] h-[24px] font-medium text-base '>Restoration Company</p>
             </div>
               <img src={Icon} alt='/' className=' w-[73px] h-[73px] ml-[100px] mt-[72px] ' />
             </div>
             <p className=' ml-[72px] font-medium text-base text-left align-top mt-[44px]' >Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
             <img src={Stars} alt='/' className=' ml-[72px] mt-[32px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body