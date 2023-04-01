import React from 'react'
import Image6 from '../assets/Image6.png';
import Date from '../assets/Date1.png';
import Image8 from '../assets/Image8.png';
import Image9 from '../assets/Image9.png';

const Blog = () => {
  return (
    <div>
        <div className=' ml-[100px]'>
        <div >
            <div className=' ml-[420px] mt-[50px]'>
            <p className=' bg-[E8E8E8] w-[226px] mb-[3px] font-normal text-base my-[3px] ml-[160px] p-2 '><span className=' border-l-4 border-x-yellow-500' ></span>Our Blog</p>
          <h1 className='w-[554px] h-[213px] text-[60px] font-bold leading-[71px] align-top  text-left'>Our Latest News</h1>
            </div>
            <div className=' border-t-2 border-t-gray-200 w-[942px]   h-[308px] flex justify-center -mt-[60px] gap-[30px] ml-[180px]'>
                <img src={Image6} alt='/' className=' w-[308] h-[253px] mt-[50px]' />
                <div>
                <img src={Date} alt='/' className=' ml-[20px] mt-[50px] w-[255px] h-[63px]' />
                <p className=' ml-16 w-[54px] h-[47px] font-semibold text-4xl text-center align-top'>08</p>
                <p className=' ml-12 -mt-2 w-[85px] h-[24px] text-base text-center align-top text-[#666C89]'>September</p>
             </div>
                <div className=' ml-11 mt-[50px]'>
                    <h1 className=' text-[#1C1F35] text-2xl font-normal w-[335px] h-[60px] text-left align-top'>Inland freight a worthy solution for your business</h1>
                    <p className=' text-[#666C89] text-2xl font-medium w-[335px] h-[72px] text-left align-top mt-[15px]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ol className=' w-[335px] h-[108px] font-medium text-base align-top text-left mt-[60px] list-disc ml-4 '>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                    </ol>
                </div>

        </div>
    </div>
    <div className=' border-t-2 border-t-gray-200 w-[942px]   h-[308px] flex justify-center mt-[70px] gap-[30px] ml-[180px]'>
                <img src={Image9} alt='/' className=' w-[308] h-[253px] mt-[50px]' />
                <div>
                <img src={Date} alt='/' className=' ml-[20px] mt-[50px] w-[255px] h-[63px]' />
                <p className=' ml-16 w-[54px] h-[47px] font-semibold text-4xl text-center align-top'>12</p>
                <p className=' ml-12 -mt-2 w-[85px] h-[24px] text-base text-center align-top text-[#666C89]'>September</p>
                <span className=' border-r-[1px] border-gray-600'></span>
             </div>
                <div className=' ml-11 mt-[50px]'>
                    <h1 className=' text-[#FFBE34] text-2xl font-normal w-[335px] h-[60px] text-left align-top'>Inland freight a worthy solution for your business</h1>
                    <p className=' text-[#666C89] text-2xl font-medium w-[335px] h-[72px] text-left align-top mt-[15px]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ol className=' w-[335px] h-[108px] font-medium text-base align-top text-left mt-[60px] list-disc ml-4 '>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                    </ol>
                </div>

        </div>
        <div className=' border-t-2 border-t-gray-200 w-[942px]   h-[308px] flex justify-center mt-[70px] gap-[30px] ml-[180px]'>
                <img src={Image8} alt='/' className=' w-[308] h-[253px] mt-[50px]' />
                <div>
                <img src={Date} alt='/' className=' ml-[20px] mt-[50px] w-[255px] h-[63px]' />
                <p className=' ml-16 w-[54px] h-[47px] font-semibold text-4xl text-center align-top'>25</p>
                <p className=' ml-12 -mt-2 w-[85px] h-[24px] text-base text-center align-top text-[#666C89]'>September</p>
             </div>
                <div className=' ml-11 mt-[50px]'>
                    <h1 className=' text-[#1C1F35] text-2xl font-normal w-[335px] h-[60px] text-left align-top'>Inland freight a worthy solution for your business</h1>
                    <p className=' text-[#666C89] text-2xl font-medium w-[335px] h-[72px] text-left align-top mt-[15px]'>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>
                    <ol className=' w-[335px] h-[108px] font-medium text-base align-top text-left mt-[60px] list-disc ml-4 '>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                        <li>Urgent transport solutions </li>
                        <li>Reliable & experienced staffs</li>
                    </ol>
                </div>

        </div>
        </div>
        <div className=' flex justify-center'>
        <button className=' bg-[#091242] w-[194px] h-[60px] text-white mt-[150px] text-[16px] font-semibold leading-[22px]  align-top'>More Blog</button>
        </div>
    </div>
  )
}

export default Blog