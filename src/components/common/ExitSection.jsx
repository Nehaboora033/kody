import React from 'react'
const ExitSection = ({ data }) => {
    if (!data) return null

    return (
        <div className="max-w-[370px]">
            {/* Title */}
            <h2 className="text-xl font-semibold">{data.title}</h2>

            {/* Description */}
            <p className="mt-2 text-gray-700">{data.description}</p>

            {/* Bullets */}
            <div className="mt-4 flex flex-col gap-3">
                {data.bullets?.map((bullet, index) => {
                    const Icon = bullet.icon // ✅ assign to variable
                    return (
                        <div
                            key={index}
                            className="border border-[#eee] p-[10px] rounded-[6px] h-full flex flex-col items-start gap-2" >
                            {Icon && <Icon className="w-6 h-6 text-gray-800" />}
                            <h4 className="text-base font-medium">{bullet.heading}</h4>
                            <p className="text-sm text-gray-600">{bullet.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExitSection