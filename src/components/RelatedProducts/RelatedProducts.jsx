import React, { useState } from 'react';
import ProductCard from "../ProductCard";
import { Button, products } from '../index';
import { ThreeDots } from 'react-loader-spinner';
import { IoMdClose } from 'react-icons/io';

const RelatedProducts = ({ productId }) => {
    
    const [allProducts, setAllProducts] = useState(products);

    // for quick view more modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModalId, setCurrentModalId] = useState(0);
    
    const filteredProducts = allProducts.filter(product =>
        product.id !== products[productId-1].id && product.category === products[productId-1].category
    );

    React.useEffect(() => {
        // document.documentElement.scrollTo(0,0)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [productId])

    return (
        <section>
            <div className='bg-[#F5F5F5] w-full my-16'>
                <div>
                    <h1 className='tekoFont lg:text-5xl text-gray-600 font-semibold'>Related products</h1>
                </div>
                {/* Products Display */}
                <div className="container flex flex-wrap items-center justify-normal gap-x-6 gap-y-10 py-5 px-2 lg:px-0">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            id={product.id}
                            category={product.category}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            currentModalId={currentModalId}
                            setCurrentModalId={setCurrentModalId}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts
