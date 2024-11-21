import React, { useEffect, useState } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { QuickViewModal } from '../components/index';
import { Link } from 'react-router-dom';


const ProductCard = ({ id, name, category, image, price, originalPrice, isModalOpen, setIsModalOpen, currentModalId, setCurrentModalId }) => {

    const handleClick = () => {
        setCurrentModalId(id);
        setIsModalOpen(true)
    }

    return (
        <div className='w-[200px] lg:w-[380px] hover:shadow-xl cursor-pointer transition-all duration-300 '>
            <div className='relative w-full overflow-hidden transition-all duration-300 group'>
                <Link to={`/productdetails/${id}`}>
                    <img className='w-full overflow-hidden transition-all duration-500 hover:scale-110 ' src={image} alt={name} />
                </Link>
                <div className='absolute bottom-0 hidden w-full group-hover:block'>
                    <button onClick={handleClick} className='w-full py-1 text-white bg-black'>Quick View</button>
                </div>
            </div>
            <Link to={`/productdetails/${id}`}>
                <div className='flex flex-col items-center gap-3 py-8 pt-5 shadow-sm'>
                    <h2 className='text-sm text-gray-400 barlowFont'>{category}</h2>
                    <h1 className='font-semibold tekoFont'>{name}</h1>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='flex items-center text-gray-400 cursor-default'> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />
                        </div>
                        <p className='font-semibold cursor-default'> <strike className="text-gray-400" >₹{originalPrice}</strike> {" "}{price}</p>
                    </div>
                </div>
            </Link>
            {
                isModalOpen && <QuickViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setCurrentModalId={setCurrentModalId} currentModalId={currentModalId} />

            }
        </div>
    )
}

export default ProductCard



