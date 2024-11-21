import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, products, RelatedProducts } from '../components/index';
import ProductContext from '../context/ProductContext';

const ProductDetails = () => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(ProductContext);


    const handleQuantityChange = (action) => {
        if (action === "increment") {
            setQuantity(quantity + 1);
        }
        else if (action === "decrement" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        const product = products.find(product => product.id === parseInt(productId));
        if (product) {
            addToCart({ ...product, quantity });
            setQuantity(1)
        }
    };

    return (
        <main className='bg-[#F5F5F5]'>
            <div className="container px-8 lg:px-0">
                <div className='flex flex-col w-full pt-16 lg:flex-row '>
                    <img className='w-full lg:w-1/2' src={products[productId - 1].image} alt="Product" />
                    <div className='w-full pt-4 lg:w-1/2 lg:px-8'>
                        <div>
                            <h1 className='text-4xl font-semibold text-gray-600 tekoFont'>{products[productId - 1].name}</h1>
                            <div className='flex flex-col gap-1 my-5'>
                                <p className='text-4xl font-semibold cursor-default'>
                                    <strike className="text-gray-400">₹{products[productId - 1].originalPrice}</strike> {" "}
                                    ₹{products[productId - 1].price}
                                </p>
                                <p className='text-xl text-gray-600'>{products[productId - 1].description}</p>
                            </div>
                            <div className='flex items-center gap-4 my-5'>
                                <div className='flex items-center border border-gray-400 rounded'>
                                    <button onClick={() => handleQuantityChange('decrement')} className='px-3 py-1 border'>-</button>
                                    <p className='px-3 bg-white py-'>{quantity}</p>
                                    <button onClick={() => handleQuantityChange('increment')} className='px-3 py-1 border'>+</button>
                                </div>
                                <Button className='ml-8 text-gray-500 border-gray-400' onClick={handleAddToCart}>Add to cart</Button>
                            </div>

                            <div className='w-full h-[1px] bg-gray-300 mb-5'></div>
                            <div>
                                <p className='py-3 text-lg text-gray-600'>Category: <span className='text-[#F2295B]'>{products[productId - 1].category}</span></p>
                                <p className='pb-3 text-lg font-bold text-gray-600'>Free shipping on orders over ₹50!</p>
                                <ul className='flex flex-col gap-1 text-lg font-semibold text-gray-600'>
                                    <li>✅ No-Risk Money Back Guarantee!</li>
                                    <li>✅ No Hassle Refunds</li>
                                    <li>✅ Secure Payments</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

                <RelatedProducts productId={productId} />
            </div>
        </main>
    )
}

export default ProductDetails
