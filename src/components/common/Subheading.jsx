import React from 'react'

const Subheading = ({ children, className }) => {
  return (
    <h2 className={`${className} font-bold text-[48px] leading-[120%] uppercase `}>
      {children}
    </h2>
  )
}

export default Subheading