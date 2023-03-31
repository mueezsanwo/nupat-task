import React from 'react'
import Image from '../assets/Image1.png';
import Icon2 from '../assets/Icon2.png'
import Package from '../assets/Icon.jpg'
import Global from '../assets/Global.png'
import Intime from '../assets/Intime.png'
import Shipping from '../assets/Shipping.png'
import Headphone from '../assets/Headphone.png'
import Price from '../assets/Price.png'
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/Linkdin.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/Twitter.svg';
import Photo8  from '../assets/photo8.png'
import Photo9  from '../assets/Photo9.png'
import Photo10  from '../assets/Photo10.png'

const LowerBody = () => {
  return (
    <div>
        <div className=' w-full flex h-[897px] mt-[100px]'>
            <div className=' w-[50%] bg-[#091242]  '>
            <img src={Image} alt='/' className='mt-[142px] ml-[142px]  w-[929px] h-[610px]  ' />
            <div className=' w-[417px] h-[139px]  bg-gradient-to-br from-[#FFB629] from-0% via-[#FFDA56] via-50% to-[#FFD7A6] to-100% ml-[300px] -mt-[140px] absolute flex gap-[21px] '>
            <img src={Icon2} alt='/' className=' ml-[33px] w-[65px] h-[66px] mt-[38px] ' />
                 <p className=' w-[259px] h-[65px] text-[25px] leading-[29px] text-[#1C1F35] text-left align-top mt-[38px]'>Moving your products across borders</p>
               </div>
            <div className=' w-[50%]'>
              <div className='  ml-[950px] -mt-[550px] '>
              <p className=' w-[98px] h-[23px] pl-1 bg-[#E8E8E8] border-l-2 border-l-yellow-500 text-sm font-normal px-2 py-[3px] text-left align-top '>Why Choose</p>
              <h1 className=' w-[438px] h-[82px] text-[35px] leading-[41px] text-[#1C1F35] mt-[18px] font-semibold text-left align-top'>We create opportunity to reach potential</h1>
              <p className=' w-[486px] h-[72px] font-medium text-base mt-[18px] text-[#666C89] text-left align-top'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
              <div className=' grid grid-cols-2 w-[500px] mt-5 '>
                <div className=' flex'>
                    <img src={Package} alt='/' className=' w-[63px] h-[63px]' />
                    <p className='mt-4 ml-2 w-[140px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>Safe Package</p>
                </div>
                <div className=' flex'>
                    <img src={Shipping} alt='/' className=' mb-2 w-[63px] h-[63px]' />
                    <p className=' mt-4 ml-2 w-[150px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>Ship Everywhere</p>
                </div>
                <div className=' flex'>
                    <img src={Global} alt='/' className='  w-[63px] h-[63px]' />
                    <p className=' mt-4 ml-2 w-[140px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>Global Tracking</p>
                </div>
                <div className=' flex'>
                    <img src={Headphone} alt='/' className='  w-[63px] h-[63px]' />
                    <p className=' mt-4 ml-2 w-[140px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>24/7 Support</p>
                </div>
                <div className=' flex'>
                    <img src={Intime} alt='/' className='mt-2  w-[63px] h-[63px]' />
                    <p className='mt-4 ml-2 w-[150px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>In Time Delivery</p>
                </div>
                <div className=' flex'>
                    <img src={Price} alt='/' className=' mt-2 w-[63px] h-[63px]' />
                    <p className=' mt-4 ml-2 w-[180px] h-[25px] font-normal text-[#1C1F35] text-[20px] leading-[24px] align-top text-left'>Transparent Pricing</p>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
        {/* Team */}
        <div className=' w-[1200px] h-[658px] mt-[100px] ml-[150px]'>
        <div className=' flex justify-center '>
            <div>
            <p className=' mt-[19px] w-[127px] h-[23px] pl-[4px] border-l-[2px] border-l-yellow-500 mx-auto bg-[#E8E8E8] text-[#1C1F35] '>The Transporters</p>
            <h1 className=' w-[534] h-[41px] font-semibold text-[35px] leading-[41px] text-[#1C1F35] mx-auto mt-[19px]  '>Meet Expert Team</h1>
            </div>
            </div>
            <div className=' flex justify-center gap-[54px] mt-[26px]'>
              <div className=' w-[364px] h-[538px]'>
                <img src={Photo8} alt='/' className=' w-[368px] h-[426px]' />
                <div className=' bg-[#1C1F35] flex justify-between w-[364px] h-[112px]'>
                    <div className=' ml-[34px]'>
                        <p className=' w-[123px] h-[24px] text-[20px] leading-[24px] font-medium align-top text-left text-white mt-[42px]'>Jessica Arow</p>
                        <p className=' w-[68px] h-[24px] text-white text-base font-medium text-left align-top'>Designer</p>
                    </div>
                    <div className=' bg-yellow-500 w-[161px] h-[51px] flex justify-center gap-4 -mt-[30px]'>
                        <img src={Twitter} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Facebook} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Instagram} alt='/' className=' w-[23px] h-[21px] mt-4' />
                    </div>
                </div>
              </div>
              <div className=' w-[364px] h-[538px]'>
                <img src={Photo9} alt='/' className=' w-[368px] h-[426px]' />
                <div className=' bg-[#1C1F35] flex justify-between w-[364px] h-[112px]'>
                    <div className=' ml-[34px]'>
                        <p className=' w-[123px] h-[24px] text-[20px] leading-[24px] font-medium align-top text-left text-white mt-[42px]'>Jessica Arow</p>
                        <p className=' w-[68px] h-[24px] text-white text-base font-medium text-left align-top'>Designer</p>
                    </div>
                    <div className=' bg-yellow-500 w-[181px] h-[51px] flex justify-center gap-4 -mt-[30px]'>
                    <img src={LinkedIn} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Twitter} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Facebook} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Instagram} alt='/' className=' w-[23px] h-[21px] mt-4' />
                    </div>
                </div>
              </div>
              <div className=' w-[364px] h-[538px]'>
                <img src={Photo10} alt='/' className=' w-[368px] h-[426px]' />
                <div className=' bg-[#1C1F35] flex justify-between w-[364px] h-[112px]'>
                    <div className=' ml-[34px]'>
                        <p className=' w-[123px] h-[24px] text-[20px] leading-[24px] font-medium align-top text-left text-white mt-[42px]'>Jessica Arow</p>
                        <p className=' w-[68px] h-[24px] text-white text-base font-medium text-left align-top'>Designer</p>
                    </div>
                    <div className=' bg-yellow-500 w-[111px] h-[51px] flex justify-center gap-4 -mt-[30px]'>
                    <img src={Facebook} alt='/' className=' w-[23px] h-[21px] mt-4' />
                        <img src={Instagram} alt='/' className=' w-[23px] h-[21px] mt-4' />
                    </div>
                </div>
              </div>
            </div>
            </div>
           </div>
  )
}

export default LowerBody