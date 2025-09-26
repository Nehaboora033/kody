import React from 'react'
import Subheading from './common/Subheading'
import Description from './common/Description'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Leader_Data } from '../../src/utils/helper';
import commas from '../assets/webp/inverted comma.webp'

const Leaders = () => {
  return (
    <div className='bg-color p-[60px] mt-[100px]'>
      <div className='max-w-[1164px] mx-auto px-3 '>
        <Subheading className={'text-center mb-4'}>
          Trusted by Leaders
        </Subheading>
        <Description className={'max-w-[542px] mx-auto text-center grey '}>
          Real stories from people I’ve worked with — proving that results speak louder than words.
        </Description>
        <div className=''>
          <Swiper
            slidesPerView={2}
            spaceBetween={24}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            initialSlide={Math.floor(Leader_Data.length / 2)} // 👈 start at index 2
            loop={true}
            className='mySwiper '
          >
            <div>
              {Leader_Data.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="light-gradient pt-[96px] pb-[20px] pl-[20px] pr-[40px] rounded-[32px] shadow-hire  backdrop-blur-[21.4px] relative mt-[100px] mb-[76px] min-h-[310px] flex group"
                  >
                    <div className="absolute top-0 left-[25px] -translate-y-1/2 z-10 rounded-full p-[2px] group-[.swiper-slide-active]:bg-gradient-to-b from-[#5FE4FF] to-[#238FF4]">
                      <img
                        src={item.profile}
                        alt="profile"
                        className="size-[124px] rounded-full object-cover group-[.swiper-slide-active]:border-gradient"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-full w-full">
                      <Description className="grey">{item.description}</Description>
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <h3 className="font-normal mt-[2px] grey">{item.role}</h3>
                      </div>
                    </div>
                    <img src={commas} alt="inverted commas" className="absolute bottom-0 right-0 p-[10px]" />
                  </SwiperSlide>
                )
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Leaders