import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import ai from '../assets/webp/ai.webp'
import angular from '../assets/webp/angular.webp'
import docker from '../assets/webp/doker.webp'
import github from '../assets/webp/github.webp'
import go from '../assets/webp/go.webp'
import grok from '../assets/webp/grok.webp'
import java from '../assets/webp/java.webp'
import js from '../assets/webp/js.webp'
import python from '../assets/webp/python.webp'
import react from '../assets/webp/react.webp'
import slack from '../assets/webp/slack.webp'
import ts from '../assets/webp/ts.webp'
import aws from '../assets/webp/awslogo.webp'
import sql from '../assets/webp/sql.webp'
import arrowbg from '../assets/webp/herobg-arrow.webp'
import person from '../assets/webp/heroperson.webp'

const Hero = () => {
  return (
    <div className='max-w-[1164px] px-3 mx-auto mt-[23px] flex justify-between'>

      {/* first part */}
      <div className='flex relative'>
        <div className='max-w-[359px] mt-[77px]'>
          <Heading className={'uppercase mb-4'} >
            <>
              grow Fast, <span className='text-[#3CB2F9]' >Smart &</span> Secure.
            </>
          </Heading>
          <Description className={'grey max-w-[300px]'}>
            I help founders scale from zero to $50M, cut infrastructure costs, and ship world-class tech products.
          </Description>
        </div>
        <img src={arrowbg} alt="arrow image" className='object-cover absolute w-[491px] top-[40px] -right-[220px]' />
      </div>

      {/* second part  */}
      <div className='flex '>
        <div className='gradient-blue size-[371px] rounded-full blur-[288.2px] flex'> </div>
        <img src={person} alt="person" className='w-[424px] h-[645px] flex z-[3]' />
      </div>


      {/* third part  */}
      <div className='max-w-[226px]'>
        <h5 className='grey mb-[6px]'>Tech I Work With</h5>
        {/* logo box */}
        <div className='shadow-box light-gradient rounded-[32px] h-[403px] w-[226px] p-3 backdrop-blur-[26.5px] relative z-[1]'>
          <div>
            {/* ai */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[23px] left-[59px]'>
              <img src={ai} alt="ai" />
            </div>
            {/* react */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[28px] right-[10px]'>
              <img src={react} alt="react" />
            </div>
            {/* python */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[95px] left-[17px]'>
              <img src={python} alt="python" />
            </div>
            {/* js */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[140px] left-[78px]'>
              <img src={js} alt="js" />
            </div>
            {/* docker */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[135px] right-[27px]'>
              <img src={docker} alt="docker" />
            </div>
            {/* go */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[196px] right-[72px]'>
              <img src={go} alt="go" />
            </div>
            {/* java */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[205px] right-[5px]'>
              <img src={java} alt="java" />
            </div>
            {/* ts */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute bottom-[81px] left-[43px]'>
              <img src={ts} alt="ts" />
            </div>
            {/* angular */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute bottom-[91px] right-[61px]'>
              <img src={angular} alt="angular" />
            </div>
            {/* slack */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute right-[12px] bottom-[42px]'>
              <img src={slack} alt="slack" />
            </div>
            {/* github */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute bottom-[13px] right-[82px]'>
              <img src={github} alt="github" />
            </div>
            {/* grok */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute bottom-[20px] left-[12px]'>
              <img src={grok} alt="grok" />
            </div>
            {/* aql */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[205px] left-[19px]'>
              <img src={sql} alt="sql" />
            </div>
            {/* aws */}
            <div className='size-[52px] bg-white rounded-full p-[12px] flex items-center justify-center absolute top-[75px] right-[62px]'>
              <img src={aws} alt="aws" />
            </div>
          </div>
          {/* blue circle */}
          <div className='size-[158px] rounded-full gradient-blue flex  absolute -bottom-[70px] -right-[40px] z-[-0] '></div>
        </div>


      </div>

    </div>

  )
}

export default Hero