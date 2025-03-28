import React from 'react'
import { FiShoppingBag } from 'react-icons/fi';




const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link:"/#"
    },
    {
        id: 3,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 3,
        name: "Electronics",
        link: "/#"
    }
    
];

const Dropdownlist = [
    {
        id: 1,
        name: "Tranding Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    
];

function Nav({handleOrderPopup}) {
  return (
    <div className='shadow-md bg-white dark:bg-text-white duration-200 relative z-40'>
        <div className='bg-gray-500 py-2'>
            <div className='container flex justify-between items-center'>
                <div className=''>
                    <a href="#" className='font-bold text-xl items-center'>
                        <FiShoppingBag size="30" />
                        ShopMe
                    </a>
                </div>

                <div className='flex justify-between '></div>
            </div>
        </div>
    </div>
  )
}

export default Nav