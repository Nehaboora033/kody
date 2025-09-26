import React from 'react'
import Subheading from './common/Subheading'
import Description from './common/Description'
import { Current_Data } from '../utils/helper'
import { Dot } from '../utils/icons'

const Current = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto pt-[80px] py-[190px]'>
      <div className='rounded-[400px] font-semibold text-[16px] text-gradient py-2 px-4 shadow-avail backdrop-blur-[21px] mb-3 w-fit mx-auto flex items-center gap-[6px]'>
        <Dot color="var(--color-icon)" />
        Available to Hire
      </div>

      <Subheading className={'text-center mb-4'}>
        CURRENT AVAILABILITY
      </Subheading>

      <Description className={'grey text-center max-w-[543px] mx-auto mb-[80px]'}>
        Kody is available as a fractional CTO to help tech <br />
        companies scale efficiently.
      </Description>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
        {Current_Data.map((item, index) => (
          <div
            key={index}
            className={`
               card w-[364px] h-[318px] py-[33px] px-[15px] rounded-[24px] 
              backdrop-blur-[21.3px] transition-all duration-300 ease-in-out cursor-pointer
              ${index === 1
                ? 'current-gradient shadow-current-middle text-white scale-105 dark:light-gradient dark:text-[#EEECEC]'
                : 'light-gradient shadow-figure'}
            `}
          >
            <h4
              className={`
                text-[32px] font-normal leading-[120%] mb-4 text-center 
                ${index === 1 ? 'text-white dark:text-[#EEECEC]' : ''}
              `}
            >
              {item.validity}
            </h4>

            <p
              className={`
                text-[40px] font-semibold leading-[120%] mb-6 text-center 
                ${index === 1 ? 'text-white dark:text-[#EEECEC]' : 'text-gradient'}
              `}
            >
              {item.price}
            </p>
            <div className={` w-[324px] h-[1px]  ${index === 1 ? 'bg-[#FEFEFE]' : 'blueline-gradient'} `}></div>
            <Description
              className={`
                text-center leading-[170%] mt-4 
                ${index === 1 ? 'text-white dark:text-[#EEECEC]' : 'grey'}
              `}
            >
              {item.description}
            </Description>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Current