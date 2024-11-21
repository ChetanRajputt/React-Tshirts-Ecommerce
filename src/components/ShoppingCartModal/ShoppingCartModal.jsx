import { IoMdClose } from 'react-icons/io';
import ShopCartCard from './ShopCartCard';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

const ShoppingCartModal = ({ isShoppingCartOpen, setIsShoppingCartOpen }) => {

    const { shoppingItems,addSubTotalAmount } = useContext(ProductContext);

    return (
        <div>
            {isShoppingCartOpen && (
                <div className="fixed inset-0  flex justify-end z-50">
                    <div className='bg-black absolute  inset-0 opacity-50 cursor-pointer' onClick={() => setIsShoppingCartOpen(false)}></div>
                    <div className="w-[90%] lg:w-[35%] bg-white h-full p-4 relative z-60">
                        <div className='flex justify-between'>
                            <h2 className="text-xl mb-4 text-[#67727D] ">Shopping Cart</h2>
                            <button onClick={() => setIsShoppingCartOpen(false)}><IoMdClose color='#67727D' size={30} /></button>
                        </div>
                        <div className='w-full h-[2px] bg-gray-600'></div>

                        {/* Empty Shopping Items */}
                        {!shoppingItems.length && (
                            <div className='flex justify-center items-center h-full'>
                                <h2 className="text-xl mb-4 text-[#67727D] ">Your cart is empty</h2>
                            </div>
                        )
                        }

                        {/* Carts display */}
                        <div className="flex flex-col gap-4 mt-12 h-[56vh]">
                            {
                                shoppingItems && shoppingItems.map(item => (
                                    <ShopCartCard key={item.id} id={item.id} quantity={item.quantity} image={item.image} name={item.name} price={item.price} />
                                ))
                            }
                        </div>

                        {/* Sub total */}
                        <div className='w-full h-[2px] bg-gray-600'></div>
                        <div className='flex justify-between items-center mt-2'>
                            <h2 className="text-xl mb-4 text-[#67727D] ">Subtotal:</h2>
                            <p>${addSubTotalAmount()}.00</p>
                        </div>
                        <div className='w-full h-[2px] bg-gray-600'></div>

                        <div className='my-5 flex flex-col gap-4'>
                            <button className='px-4 w-full py-2 uppercase font-semibold border-t-2 border-b-2 border-r-2 border-gray-600'>view cart</button>
                            <button className='px-4 w-full py-2 uppercase font-semibold border-t-2 border-b-2 border-r-2 border-gray-600'>check cart</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCartModal
