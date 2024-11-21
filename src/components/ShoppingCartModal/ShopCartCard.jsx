import React, { useContext, useState } from 'react'
import { products } from "../index";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ProductContext from '../../context/ProductContext';

const ShopCartCard = ({ id, image, name, price, quantity }) => {

    const { removeToCart, updateQuantity, shoppingItems } = useContext(ProductContext);

    // const [quantity, setQuantity] = useState();

    const handleUpdateQuantity = (action) => {
        updateQuantity(id, action);
    }

    const totalPrice = () => {
        const item = shoppingItems.find((item) => item.id === id);
        return item ? item.price * item.quantity : 0;
    };
    

    return (
        <div className='flex items-center gap-3 text-gray-600 w-full'>
            <div className='w-[80px]'>
                <img src={image} loading='lazy' />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between'>
                    <h4 className='text-xl'>{name}</h4>
                    <IoIosCloseCircleOutline onClick={() => removeToCart(id)} size={25} className='text-gray-400 hover:text-red-600 cursor-pointer -translate-y-1' />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center border border-gray-400 rounded'>
                        <button onClick={() => handleUpdateQuantity("decrement")} className='px-3 border py-1'>-</button>
                        <p className='px-3 py- bg-white'>{quantity}</p>
                        <button onClick={() => handleUpdateQuantity("increment")} className='px-3 border py-1'>+</button>
                    </div>
                    <p className='text-xl'>${totalPrice()}.00</p>
                </div>
            </div>
        </div>
    )
}

export default ShopCartCard
