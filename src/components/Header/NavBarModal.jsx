import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Navbar from './Navbar'

const NavBarModal = ({ toggle, setToggle }) => {
    return (
        <div>
            {
                toggle &&
                <div className="fixed transition-all duration-300 inset-0 z-50 flex items-center justify-end">
                    <div className='absolute inset-0 bg-gray-500 opacity-40' onClick={() => setToggle(false)}>
                    </div>
                    <div className='relative bg-white h-full w-[90%]  z-60'>
                        <div className='flex justify-end p-4'>
                            <button onClick={() => setToggle(false)}>
                                <IoMdClose size={20} />
                            </button>
                        </div>
                        <div>
                            <Navbar/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBarModal
