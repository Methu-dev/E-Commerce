import React from 'react'
import Image1 from "../../assets/hero/sale.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/women.png"

import slider from 'react-slick';
import Slider from 'react-slick';

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis porro minus cumque eius, est provident vero ea reiciendis maiores sunt dignissimos, accusantium in. Iure vitae repudiandae ea, ad aliquam assumenda!"
    },
    {
        id: 2,
        img: Image2,
        title: "upto 30% off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis porro minus cumque eius, est provident vero ea reiciendis maiores sunt dignissimos, accusantium in. Iure vitae repudiandae ea, ad aliquam assumenda!"
    },
    {
        id: 3,
        img: Image3,
        title: "upto 70% off on all products Sale Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis porro minus cumque eius, est provident vero ea reiciendis maiores sunt dignissimos, accusantium in. Iure vitae repudiandae ea, ad aliquam assumenda!"
    },
]

function Hero({handleOrderPopup}) {
    let settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseonHover: false,
        pauseOnFocus: true,
    }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
        <div className='h-[700px] bg-blue-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div>
                        <div className=''>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero