import React from 'react'
import Subheading from './common/Subheading'
import { Bussiness_Data } from '../utils/helper'
import Description from './common/Description'

const RealBusiness = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto'>
      <Subheading className={'text-center '}>
        Real Business Impact
      </Subheading>
      <div className='max-w-[1116px] px-3'>
        <div className="grid grid-cols-4 gap-[72px]  ">
          {/* First row: indexes 0-3 */}
          {Bussiness_Data.slice(0, 4).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="size-[64px] rounded-full flex items-center justify-center shadow-icon light-gradient">
                <item.icon />
              </div>
              <Description className="mt-4 text-center grey !text-[20px]">{item.description}</Description>
            </div>
          ))}
          {/* Second row: indexes 4-5, placed exactly under middle columns */}
          {Bussiness_Data.slice(4).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              // Position items in columns 2 and 3
              style={{ gridColumn: index === 0 ? '2 / 3' : '3 / 4' }}
            >
              <div className="size-[64px] rounded-full flex items-center justify-center shadow-icon light-gradient">
                <item.icon />
              </div>
              <Description className="mt-4 text-center !text-[20px] grey">{item.description}</Description>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RealBusiness