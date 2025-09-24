import React from 'react'
import Button from './Button'
import { Linkedin, Resume_Icon, Toggle_Moon_Icon, Toggle_Sun_Icon, } from '../../utils/icons'
import { Navlinks } from '../../utils/helper'
import { Link } from 'react-scroll'
import { useTheme } from '../../context/ThemeProvider'

const Header = () => {

  const { theme, toggleTheme } = useTheme(); // ✅ get theme + toggle
  return (
    <div className="max-w-[1164px] mx-auto px-3 flex py-[22px] justify-between items-center">
      <nav className="flex gap-6">
        {Navlinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-blue-400 cursor-pointer grey"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        {/* Toggle button */}
        <Button
          onClick={toggleTheme} // ✅ use provider toggle
          className="cursor-pointer rounded-full size-[56px] light-gradient shadow-hire backdrop-blur-[8px] flex items-center justify-center transition-all duration-300"
        >
          {theme === "dark" ? (
            <Toggle_Sun_Icon className="transition-transform duration-300" />
          ) : (
            <Toggle_Moon_Icon className="transition-transform duration-300" />
          )}
        </Button>
        <Button className="cursor-pointer rounded-full size-[56px] light-gradient shadow-hire backdrop-blur-[8px]">
          <Linkedin color="var(--color-icon)" />
        </Button>

        <Button className="cursor-pointer blue flex items-center gap-2 light-gradient shadow-hire !rounded-[999px] backdrop-blur-[8px] px-4">
          Resume
          <Resume_Icon color="var(--color-icon)" />
        </Button>
      </div>
    </div>
  )
}

export default Header