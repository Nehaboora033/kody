import { useEffect, useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import arrowbg from '../assets/webp/herobg-arrow.webp'
import person from '../assets/webp/heroperson.webp'
import { TechLogos } from '../utils/helper'
import character from '../assets/webp/character.webp'
import Button from './common/Button'
import { HireMe_Icon } from '../utils/icons'
import greyarrow from '../assets/webp/greyheroarrow.webp'

const Hero = () => {
  const [isDark, setIsDark] = useState(false)

  // Detect dark mode
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"))

    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])
  return (
    <div className='max-w-[1164px] px-3 mx-auto mt-[23px] relative '>
      <div className='flex justify-between'>
        {/* first part */}
        <div className='max-w-[359px] relative flex'>
          <div className='flex flex-col z-[6]'>
            <Heading className={'uppercase mb-4'}>
              <>
                Grow Fast, <span className='text-[#43BCFA]'>Smart &</span> Secure.
              </>
            </Heading>
            <Description className={'grey max-w-[300px]'}>
              I help founders scale from zero to $50M, cut infrastructure costs, and ship world-class tech products.
            </Description>
          </div>
          <div className='absolute -top-[50px] -right-[290px] z-[2]'>
            <img src={isDark ? greyarrow : arrowbg} alt="arrow" className='w-full h-full ' />
          </div>
        </div>

        {/* middle part  */}
        <div className='flex-1 relative flex'>
          <div className='size-[317px] blue-gradient rounded-full flex justify-end absolute right-[50px] blur-[150px]  z-[3]'></div>
          <div className='flex z-[4] w-full justify-end'>
            <img src={person} alt="imageperson" className='w-[424px] h-[645px]' />
          </div>
        </div>
        {/* end part */}
        <div className='max-w-[226px] '>
          <h5 className='grey mb-[6px]'>Tech I Work With</h5>
          <div className='relative'>
            <div className='logo-gradient shadow-outline rounded-[32px] h-[403px] w-[226px] p-3 backdrop-blur-[44px] relative z-[1]'>
              {TechLogos.map((logo, i) => (
                <div
                  key={i}
                  className={`size-[52px] bg-main rounded-full p-[12px] backdrop-blur-[8.3px] shadow-logo flex items-center justify-center absolute  ${logo.className}`}>
                  <img src={isDark ? logo.greysrc : logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
            <div className='size-[158px] blue-gradient rounded-full flex z-[0] absolute bottom-[-60px] right-[-40px]'></div>
          </div>
        </div>
      </div>

      {/* character div */}

      <div className='flex justify-center'>
        <div className='shadow-hire rounded-[400px] p-3 flex w-[800px] justify-between items-center shadow-hire backdrop-blur-[26.6px] mx-auto  absolute bottom-0 z-[5]'>
          <div className='flex gap-[24px] items-center '>
            <div className='rounded-full backdrop-blur-[10.4px] border-gradient size-[96px] charcter-gradient flex items-center justify-center '>
              <img src={character} alt="profile" />
            </div>
            <div>
              <p className='font-semibold text-[24px] mb-1'>SAMUEL "KODY" DOHERTY</p>
              <p className='font-normal text-[16px] grey'>Ex-AWS, Apple, and two-time startup exit CTO.</p>
            </div>
          </div>
          <Button className="text-white h-[52px] blue-gradient whitespace-nowrap !p-[14px] flex gap-2 !px-[32px] cursor-pointer gradient-btn shadow-hire">
            Hire me
            <HireMe_Icon />
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Hero