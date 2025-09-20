// SevenFigure.jsx
import React from 'react'
import { Figure_Data } from '../utils/helper'
import Subheading from './common/Subheading'
import Description from './common/Description'

const SevenFigure = () => {
  return (
    <div className="max-w-[1164px] px-3 mx-auto py-[150px]">
      <div className="flex justify-center flex-wrap ">
        {Figure_Data.map((item, index) => {
          if (item.type === 'image') {
            return (
              <div key={index}>
                <img
                  src={item.image_url}
                  alt={item.alt_text}
                  className="w-full h-auto"
                />
              </div>
            )
          }
          return (
            <div key={index} className="max-w-[370px] gap-y-[24px] flex flex-col">
              <div className='gradient-blue rounded-[32px] py-[28px] px-[30px] shadow-icon backdrop-blur-[21.28px]'>
                <Subheading className="!text-[60px] text-white">{item.title}</Subheading>
                <Description className="text-white mt-[24px]">{item.description}</Description>
              </div>
              {/* Bullets */}
              <div className="flex flex-col gap-y-[24px]">
                {item.bullets?.map((bullet, i) => {
                  const Icon = bullet.icon
                  return (
                    <div
                      key={i}
                      className="p-[20px] shadow-box light-gradient rounded-[32px] backdrop-blur-[21.28px] flex gap-[10px]"
                    >
                      {/* ✅ prevent shrinking */}
                      <div className="size-[64px] shrink-0 rounded-full light-gradient flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-gray-800" />}
                      </div>

                      <div>
                        <h4 className="text-[28px] whitespace-nowrap font-semibold leading-[120%]">
                          {bullet.heading}
                        </h4>
                        <Description className="grey mt-2">{bullet.text}</Description>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SevenFigure