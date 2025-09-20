import React from 'react'
import Subheading from './common/Subheading'
import Description from './common/Description'
import { Current_Data } from '../utils/helper'

const Current = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto pt-[80px] py-[190px]'>
      <Subheading className={'text-center mb-4'}>
        CURRENT AVAILABILITY
      </Subheading>
      <Description className={'grey text-center max-w-[543px] mx-auto mb-[80px]'}>
        Kody is available as a fractional CTO to help tech <br />
        companies scale efficiently.
      </Description>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Current_Data.map((item, index) => (
          <div
            key={index}
            className="group w-[364px] h-[318px] py-[34px] px-[20px] rounded-[24px] shadow-box backdrop-blur-[21.3px] bg-white/40 transition-all duration-300 ease-in-out  hover:scale-105 hover:bg-gradient-to-br hover:from-[#5FE4FF] hover:to-[#238FF4] cursor-pointer light-gradient">
            <h4
              className="text-[32px] font-normal leading-[120%] mb-4 text-center group-hover:text-white">
              {item.validity}
            </h4>
            <p className=" text-[40px] font-semibold leading-[120%] mb-6 text-center bg-gradient-to-b from-[#5FE4FF] to-[#238FF4] bg-clip-text text-transparent transition-colors duration-300 group-hover:text-white" >
              {item.price}
            </p>
            <div className="w-full h-[1px] relative group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#5FE4FF] to-[#238FF4]"></div>
              {/* White overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Description className="text-[#454545s] text-center leading-[170%] mt-4 group-hover:text-white">
              {item.description}
            </Description>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Current