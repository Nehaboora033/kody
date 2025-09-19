import React from 'react'
import Subheading from './common/Subheading'
import image from '../assets/webp/laptop.webp'
import { Button } from 'react-scroll'
import { Submit_Arrow } from '../utils/icons'

const LetsTalk = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto '>
      <div className='max-w-1140px gradient-blue rounded-[32px] pl-[48px] h-[296px] flex'>
        <div className='w-[60%] py-[48px]'>
          <Subheading className={'text-white uppercase'}>
            Want to work with Kody?
            Let's talk.
          </Subheading>
          <div className="mx-6">
        
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