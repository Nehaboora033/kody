import React from 'react'
import Subheading from './common/Subheading'
import { Tech } from '../utils/helper'

const TechStack = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 mb-[90px] '>
      <Subheading className={'text-center mb-[60px]'}>
        TECH STACK
      </Subheading>
      <div className="grid grid-cols-2 gap-x-[24px] ">
        {Tech.map((item, index) => (
          <div key={index} className="mt-[32px] ">
            <h3 className="text-[32px] font-semibold leading-[120%] mb-[20px]">{item.title}</h3>
            <div className='flex flex-wrap gap-2'>
              {item.languages.map((language, langIndex) => (
                <div key={langIndex} className="border border-[#C9C9C9] rounded-[200px] px-3 py-1 w-fit">
                  {language}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TechStack