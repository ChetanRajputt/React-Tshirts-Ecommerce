import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import { IoMdMenu } from "react-icons/io";
import NavBarModal from './NavBarModal';



const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
  <>
    <header className='flex items-center justify-between w-full px-8 py-5'>
      {/* logo  */}
      <div>
        <Link to='/'>
          <img src={"/logo.jpg"} className='w-[80px]' alt="Company-Logo" />
        </Link>
      </div>
      {/* Navbar */}
      <div className="hidden lg:block" >
      <Navbar />
      </div>

      {/* for mobile devices responsive */}
      <button className='lg:hidden bg-[#F2295B] text-white text-2xl p-2 '>
        <IoMdMenu onClick={()=>setToggle(true)} />
      </button>

    </header>

      <NavBarModal toggle={toggle} setToggle={setToggle} />
  </>
  )
}

export default Header
