import React from 'react'

const Button = ({ children, className }) => {
    return (
        <button className={`${className} font-semibold text-base rounded-[400px] p-4`}>
            {children}
        </button>
    )
}

export default Button