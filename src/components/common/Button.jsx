import React from 'react'

const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`${className} font-semibold text-base rounded-[400px] p-4`}>
            {children}
        </button>
    )
}

export default Button