import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h1 className={`${className} font-bold text-[60px] leading-[120%]`}>
      {children}
    </h1>
  )
}

export default Heading