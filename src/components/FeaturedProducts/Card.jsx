import React, { useEffect, useState } from 'react'
import { IoMdStarOutline } from "react-icons/io";
import QuickViewModal from '../QuickViewModal/QuickViewModal';


const Card = ({ id, name, category, image, price, originalPrice, isModalOpen, setIsModalOpen, currentModalId, setCurrentModalId }) => {

    const handleClick = () => {
        setCurrentModalId(id);
        setIsModalOpen(true)
    }

    return (
        <div className='w-full lg:w-[270px] hover:shadow-xl cursor-pointer transition-all duration-300 '>
            <div className='w-full relative group transition-all duration-300'>
                <img className='w-full ' src={image} alt={name} />
                <div className='absolute w-full bottom-0 hidden group-hover:block'>
                    <button onClick={handleClick} className='bg-black text-white w-full py-1'>Quick View</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 pt-5 py-8 shadow-sm'>
                <h2 className='text-gray-400 barlowFont text-sm'>{category}</h2>
                <h1 className='tekoFont font-semibold'>{name}</h1>
                <div className='flex flex-col gap-2 items-center'>
                    <div className='flex items-center cursor-default text-gray-400'> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline /> <IoMdStarOutline />
                    </div>
                    <p className='cursor-default font-semibold'> <strike className="text-gray-400" >${originalPrice}</strike> {" "}{price}</p>
                </div>
                {
                    isModalOpen && <QuickViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setCurrentModalId={setCurrentModalId} currentModalId={currentModalId} />

                }
            </div>
        </div>
    )
}

export default Card


