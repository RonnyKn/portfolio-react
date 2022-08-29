import './Portfolio.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SideBar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      <div className="p-heading">
        <span>Recent Project</span>
        <span>Portfolio</span>
      </div>

      <div className="p-slider">
        <Swiper
          modules={[Pagination]}
          spaceBetween={80}
          slidesPerView={3}
          grabCursor={true}
          pagination={{ clickable: true }}
          className='portfolio-slider'
        >
          <SwiperSlide >
            <a href="http://www.google.com/" target="_blank" rel="noreferrer">
              <img src={SideBar} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ecommerce} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hoc} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  )
}
export default Portfolio;