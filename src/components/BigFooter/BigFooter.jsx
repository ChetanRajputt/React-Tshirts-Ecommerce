import React from 'react';
import { FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";


const BigFooter = () => {
    return (
        <div className='mt-[18vh] lg:mt-0'>
            <div className='w-full bg-[#415161]  text-white py-10 relative lg:h-[30vh] flex flex-col lg:flex-row justify-center gap-8 lg:gap-0'>
                <div className="w-full lg:w-1/2 flex flex-col  lg:flex-row items-center justify-center gap-5 lg:gap-0" >
                    <ul className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-2">
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>Home</li>
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>About HDX</li>
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>My account</li>
                    </ul>
                    <ul className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-2">
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>Tshirts</li>
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>Mugs</li>
                        <li className='hover:text-[#DE1144] cursor-pointer duration-300'>Contact</li>
                    </ul>
                </div>
                <ul className="w-full lg:w-1/2 flex items-center justify-center gap-3">
                    <li className='cursor-pointer hover:text-[#DE1144] text-gray-500 bg-white duration-300 p-1'><FaFacebookSquare size={25} /></li>
                    <li className='cursor-pointer hover:text-[#DE1144] text-gray-500 bg-white duration-300 p-1'><FaTwitterSquare size={25} /></li>
                    <li className='cursor-pointer hover:text-[#DE1144] text-gray-500 bg-white duration-300 p-1'><FaInstagramSquare size={25} /></li>
                    <li className='cursor-pointer hover:text-[#DE1144] text-gray-500 bg-white duration-300 p-1'><FaGooglePlusSquare size={25} /></li>
                    <li className='cursor-pointer hover:text-[#DE1144] text-gray-500 bg-white duration-300 p-1'><FaYoutubeSquare size={25} /></li>
                </ul>
            </div>
        </div>
    )
}

export default BigFooter
