import React, { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button, products } from "../index";
import ProductContext from '../../context/ProductContext';

const QuickViewModal = ({ isModalOpen, setIsModalOpen, currentModalId }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity(quantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const { addToCart } = useContext(ProductContext);

    const handleAddToCart = () => {
        const product = products.find(item=> item.id === currentModalId)
        if(product){
            addToCart({...product, quantity: quantity})
        }
    }

    return (
        <div>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-500 opacity-30" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white lg:overflow-hidden w-[80vw] overflow-y-scroll  lg:w-[65vw] h-[80vh] lg:h-[70vh] z-60">
                        <button onClick={() => setIsModalOpen(false)} className="absolute text-[#F2295B] top-0 right-0">
                            <IoMdClose size={30} />
                        </button>
                        <div className='flex flex-col w-full lg:flex-row'>
                            <img className='w-full lg:w-1/2' src={products[currentModalId - 1].image} alt="Product" />
                            <div className='w-full p-8 lg:w-1/2'>
                                <div className='lg:overflow-y-scroll lg:h-[55vh]'>
                                    <h1 className='text-4xl font-semibold text-gray-600 tekoFont'>{products[currentModalId - 1].name}</h1>
                                    <div className='flex flex-col gap-1 my-5'>
                                        <p className='text-4xl font-semibold cursor-default'>
                                            <strike className="text-gray-400">${products[currentModalId - 1].originalPrice}</strike> {" "}
                                            ${products[currentModalId - 1].price}
                                        </p>
                                        <p className='text-xl text-gray-600'>{products[currentModalId - 1].description}</p>
                                    </div>
                                    <div className='w-full h-[1px] bg-gray-300 mb-5'></div>
                                    <div>
                                        <p className='py-3 text-lg text-gray-600'>Category: <span className='text-[#F2295B]'>{products[currentModalId - 1].category}</span></p>
                                        <p className='pb-3 text-lg font-bold text-gray-600'>Free shipping on orders over $50!</p>
                                        <ul className='flex flex-col gap-1 text-lg font-semibold text-gray-600'>
                                            <li>✅ No-Risk Money Back Guarantee!</li>
                                            <li>✅ No Hassle Refunds</li>
                                            <li>✅ Secure Payments</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4 mt-5'>
                                    <div className='flex items-center border border-gray-400 rounded'>
                                        <button onClick={() => handleQuantityChange('decrement')} className='px-3 py-1 border'>-</button>
                                        <p className='px-3 py-1'>{quantity}</p>
                                        <button onClick={() => handleQuantityChange('increment')} className='px-3 py-1 border'>+</button>
                                    </div>
                                    <Button onClick={handleAddToCart} className='ml-8 text-gray-500 border-gray-400'>Add to cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuickViewModal;
