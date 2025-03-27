import React from 'react'
import BannerImg from "../../assets/4547829.jpg";

function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div data-aos="zoom-in">
                <img className='max-w-[400px] h-[350px] w-full mx-auto object-cover' src={BannerImg} alt={BannerImg.id} />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Banner