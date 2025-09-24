import React from 'react'
import Subheading from './common/Subheading'
import Button from './common/Button'
import { HireMe_Icon, Resume_Icon } from '../utils/icons'
import { Social_Links } from '../utils/helper'
import Description from './common/Description'


const Hireme = () => {

  const currentYear = new Date();
  return (
    <div className='bg-color'>
      <div className={`pt-[100px] pb-[60px]`}>
        <Subheading className={'font-semibold !text-[32px] text-center mb-[32px]'}>
          SAMUEL "KODY" DOHERTY
        </Subheading>
        <div className='flex justify-center gap-[16px] mb-[34px]'>
          <Button className="text-white blue-gradient !p-[14px] flex gap-2 !px-[32px] cursor-pointer gradient-btn shadow-hire">
            Hire me
            <HireMe_Icon />
          </Button>
          <Button className={'blue !p-[16px] light-gradient-btn flex gap-2  cursor-pointer !px-[32px] shadow-hire light-gradient backdrop-blur-[8.3px]'}>
            Resume
            <span>
              <Resume_Icon color="var(--color-icon)" />
            </span>
          </Button>
        </div>
        {/* social links  */}
        <div className="flex gap-3 justify-center ">
          {Social_Links.map((Icon, index) => (
            <div key={index} className='size-[44px]  rounded-full flex items-center justify-center cursor-pointer shadow-hire light-gradient backdrop-blur-[8.3px]'>
              <Icon className="size-[20px] icon" color="var(--color-icon)" />
            </div>
          ))}
        </div>
      </div>

      {/* copy right div */}
      <Description className='grey text-center py-4  border-t bordergrey'>
        © {currentYear.getFullYear()} Samuel “Kody” Doherty. All Rights Reserved.
      </Description>
    </div>
  )
}

export default Hireme