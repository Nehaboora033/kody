import React from 'react'

const Description = ({ children, className }) => {
    return (
        <h4 className={`${className} text-base font-normal`}>{children}</h4>
    )
}

export default Description