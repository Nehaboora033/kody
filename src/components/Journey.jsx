import React from 'react'
import image from '../assets/webp/journeyimage.webp'
import Subheading from './common/Subheading'
import { Journey_Data } from '../utils/helper'
import Description from './common/Description'

const Journey = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className='max-w-[1164px] px-3 mx-auto pt-[80px] pb-[51px]'>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <Subheading className={'mb-[24px]'}>
              Professional <br /> Journey
            </Subheading>
            <div className='grid grid-cols-3 gap-x-4 gap-y-[24px]'>
              {Journey_Data.map((item, index) => (
                <div className='py-[14px] px-[8px] w-[170px] rounded-[16px] shadow-box ' key={index}>
                  <img src={item.image} alt="logo" className='block mx-auto' />

                  <div className="w-[114px] h-[1px] bg-gray-300 mt-[12px] mx-auto" />
                  <Description className={'text-center mt-[9px] '}>
                    {item.description}
                  </Description>
                </div>
              ))}
            </div>
          </div>
          <div className='w-1/2 flex justify-end'>

            <div className='light-gradient rounded-[32px] shadow-hire px-4 pl-4 h-[706px] flex items-center justify-center'>
              <img
                src={image}
                alt="image"
                className="object-cover w-[468px] h-[674px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey