import React from 'react'

const Subheading = ({ children, className }) => {
  return (
    <h2 className={`${className} font-bold text-[48px] leading-[120%] uppercase mb-[60px]`}>
      {children}
    </h2>
  )
}

export default Subheading