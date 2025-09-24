import React from 'react'
import Subheading from './common/Subheading'
import image from '../assets/webp/laptop.webp'
import { Button } from 'react-scroll'
import { Submit_Arrow } from '../utils/icons'

const LetsTalk = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto pb-[80px] '>
      <div className='max-w-1140px blue-gradient rounded-[32px] pl-[48px] h-[296px] flex'>
        <div className='w-[60%] py-[48px]'>
          <Subheading className={'text-white uppercase'}>
            Want to work with Kody?
            Let's talk.
          </Subheading>
          <div className='flex mt-[32px] border border-white pl-[24px] rounded-[482px] w-[475px]'>
            <input
              type="email"
              className='py-[14px] w-full outline-none caret-white text-white placeholder-white bg-transparent'
              placeholder="Enter your email"
            />
            <button className='bg-white rounded-[400px] py-[14px] px-[32px] text-[#238FF4] flex items-center gap-2 cursor-pointer'>
              Submit
              <Submit_Arrow />
            </button>
          </div>
        </div>
        <div className='w-[40%] relative'>
          <img src={image} alt="laptop image" className='absolute -right-5' />
        </div>
      </div>
    </div>
  )
}

export default LetsTalk