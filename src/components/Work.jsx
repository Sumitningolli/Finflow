import React from 'react'
import "../App.css"
import { FaLongArrowAltDown } from "react-icons/fa";

const Work = () => {
  return (
    <div className='move bg-[#030712] text-white p-5 pb-15 '>
        <h1 className='text-xl font-semibold p-3 text-center md:text-center '>How It Works</h1>

        {/* Gray box centered on md with width 800px */}
        <div className='move p-10 bg-gray-300 text-[#030712] flex flex-col gap-4 rounded-md justify-center md:gap-10 md:items-center md:w-[800px] md:mx-auto' >
           
            <p className='text-xl font-semibold'>
              <span className='bg-gray-400  py-1 px-3 text-md rounded-[50%]'>1</span>
              &nbsp;&nbsp;Create your Account
            </p>
          
            <span className='flex pl-2 md:hidden'><FaLongArrowAltDown /></span>

            <p className='text-xl font-semibold'>
              <span className='bg-gray-400 py-1 px-3 text-md rounded-[50%]'>2</span>
              &nbsp;&nbsp;Link your Bank/Wallet
            </p>
            <span className='flex pl-2 md:hidden'><FaLongArrowAltDown /></span>

            <p className='text-xl font-semibold'>
              <span className='bg-gray-400 py-1 px-3 text-md rounded-[50%]'>3</span>
              &nbsp;&nbsp;Start sending Money
            </p>
        </div>
    </div>
  )
}

export default Work
