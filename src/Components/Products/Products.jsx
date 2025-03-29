import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "",
    },
    {
        id: 2,
        img: Img2,
        title: "Glosarin",
        rating: 4.5,
        color: "green",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Linda",
        rating: 4.7,
        color: "yellow",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Sadang",
        rating: 5.0,
        color: "blue",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Sadang",
        rating: 5.0, 
        color: "black",
        aosDelay: "800",
    },
]

function Products() {
    return (
        <div className='mt-14 mb-12'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-sky-500'>
                        Top Selling Products for you
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati ab dolorem.
                    </p>
                </div>
                
                {/* Product Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductsData.map((data) => (
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition'>
                            <img src={data.img} alt="Cover img" className='h-[220px] w-[150px] object-cover rounded-md mx-auto' />
                            <div className='text-center'>
                                <h3 className='font-semibold text-lg'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex justify-center items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='font-medium'>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className='flex justify-center'>
                    <button className='mt-10 cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
