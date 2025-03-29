import React from 'react'
import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from 'react-icons/fa6'

const TopProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Stylish and comfortable casual wear for everyday fashion."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: "Trendy printed shirts that make a bold fashion statement."
    },
    {
        id: 3,
        img: Img3,
        title: "Women's Shirt",
        description: "Elegant and stylish shirts tailored for women’s fashion."
    },
]

function TopProducts({ handleOrderPopup }) {
    return (
        <div className='container mx-auto px-4'>
            <div className='text-center mb-24'>
                <p data-aos="fade-up" className='text-sm text-sky-500'>Top Rated Products for You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400 max-w-lg mx-auto'>
                    Discover our top-rated products with the best quality and trending designs.
                </p>

                {/* Product Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 place-items-center mt-8'>
                    {TopProductsData.map((data) => (
                        <div key={data.id} data-aos="zoom-in"
                            className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-200 hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-6'
                        >
                            <div>
                                <img src={data.img} alt={data.title} 
                                    className='max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                            </div>
                            {/* Rating Stars */}
                            <div className='w-full flex items-center justify-center gap-1 mb-2'>
                                {[...Array(4)].map((_, index) => (
                                    <FaStar key={index} className='text-yellow-500' />
                                ))}
                            </div>

                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>

                            <button 
                                className='bg-sky-600 hover:scale-105 duration-300 text-white py-2 px-6 rounded-full mt-4 group-hover:bg-white group-hover:text-blue-600 font-semibold'
                                onClick={handleOrderPopup}
                            >
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopProducts
