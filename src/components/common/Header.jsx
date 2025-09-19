import React from 'react'
import Button from './Button'
import { Linkedin, Resume_Icon, Toggle_Icon } from '../../utils/icons'
import { Navlinks } from '../../utils/helper'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3 flex py-[22px] justify-between items-center">
      <nav className="flex gap-6">
        {Navlinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}                // matches section id
            smooth={true}
            duration={500}
            offset={-80}                  // adjust for sticky header height
            className="gray hover:text-blue-400 cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button className="cursor-pointer rounded-full size-[56px] light-gradient shadow-hire backdrop-blur-[8px]">
          <Toggle_Icon />
        </Button>
        <Button className="cursor-pointer rounded-full size-[56px] light-gradient shadow-hire backdrop-blur-[8px]">
          <Linkedin />
        </Button>
        <Button className="cursor-pointer blue flex items-center gap-2 light-gradient shadow-hire !rounded-[999px] backdrop-blur-[8px] px-4">
          Resume
          <Resume_Icon />
        </Button>
      </div>
    </div>
  )
}

export default Header