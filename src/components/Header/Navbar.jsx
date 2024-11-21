import React, { useContext, useState } from 'react';
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartModal } from "../index";
import ProductContext from "../../context/ProductContext.js";

const Navbar = () => {

  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Products', path: '/all-products' },
    { label: 'Tshirts', path: '/tshirts' },
    { label: 'Mugs', path: '/mugs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  // for nesting navLinks in mobile devices
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#F2295B" : "black"
    };
  };

  const { shoppingItems, addSubTotalAmount } = useContext(ProductContext);

  return (
    <nav>
      <ul className='flex flex-col w-full text-sm lg:flex-row lg:items-center lg:gap-5'>
        {navLinks.map((link, index) => (
          <NavLink to={link.path} style={navLinkStyles} key={index}>
            <li className='lg:uppercase border-b lg:border-none lg:mr-5 px-3 lg:px-0 bg-[#F5F5F5] lg:bg-white py-4 lg:py-0 hover:text-[#F4295B] font-semibold cursor-pointer duration-300'>
              {link.label}
            </li>
          </NavLink>
        ))}


        {/* for mobile devices */}
        <div className='relative block lg:hidden group '>
          <div className='border-b py-4 hover:text-[#F4295B] bg-[#F5F5F5] lg:bg-white px-3 lg:px-0 flex items-center justify-between cursor-pointer gap-2'>
            <span className='font-semibold duration-300'>Account</span>
            {
              isOpen ?
                <FaAngleDown onClick={() => setIsOpen(!isOpen)} />
                :
                <FaAngleUp onClick={() => setIsOpen(!isOpen)} />
            }
          </div>
          {
            isOpen && <>
              <Link to={"/my-account"}>
                <div className='border-b py-4 hover:text-[#F4295B] bg-[#F5F5F5] lg:bg-white px-3 lg:px-0 flex items-center cursor-pointer gap-2'>
                  <FaAngleRight />
                  <span className='font-semibold duration-300'>My Account</span>
                </div>
              </Link>
              <Link to={"/cart"}>
                <div className='border-b py-4 hover:text-[#F4295B] bg-[#F5F5F5] lg:bg-white px-3 lg:px-0 flex items-center cursor-pointer gap-2'>
                  <FaAngleRight />
                  <span className='font-semibold duration-300'>Cart</span>
                </div>
              </Link>
            </>
          }
        </div>

        {/* for desktop  */}
        <div className='relative z-10 hidden lg:block group '>
          <Link to={"/my-account"}>
            <div className='flex items-center gap-2 uppercase cursor-pointer'>
              <span className='font-semibold hover:text-[#F4295B] duration-300'>Account</span>
              <FaAngleDown />
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className='absolute top-full left-0 mt-2 w-[200px] hidden group-hover:flex flex-col  shadow-md px-0 py-6 bg-white'>
              <button className='uppercase transition-all duration-300 hover:text-[#F4295B] mb-2'>My Account</button>
              <button className='uppercase transition-all duration-300 hover:text-[#F4295B]'>Cart</button>
            </div>
          </Link>
        </div>

        <div className='flex items-center'>
          <button className='mt-5 relative lg:mt-0 ml-5 flex items-center text-[#F4295B] font-semibold cursor-pointer duration-300 gap-2 text-xl'>
            ${addSubTotalAmount()}.00
            <RiShoppingBasketLine onClick={() => setIsShoppingCartOpen(true)} size={30} />
          </button>
          <span className='bg-[#F4295B] lg:absolute top-8 right-7 rounded-full text-[14px]  py-[2px] px-2 text-white'>{shoppingItems.length}</span>
        </div>

        <ShoppingCartModal isShoppingCartOpen={isShoppingCartOpen} setIsShoppingCartOpen={setIsShoppingCartOpen} />

      </ul>

    </nav>
  );
}

export default Navbar;
