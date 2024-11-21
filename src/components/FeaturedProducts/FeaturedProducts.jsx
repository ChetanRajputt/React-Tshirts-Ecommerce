import React, { useState } from 'react'
import Card from './Card';
import { products } from '../index';

function FeaturedProducts() {
  const [filter, setFilter] = useState("Tshirts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalId, setCurrentModalId] = useState(0);

  const filteredProducts = products.filter((product) => product.category === filter);

  return (
    <div className='w-full flex flex-col justify-center my-20'>
      <div className='container px-8'>
        <div className='py-8'>
          <h1 className='tekoFont text-5xl font-semibold text-center'>Featured Products</h1>
        </div>
        <div className='pt-8 flex items-center gap-8'>
          <button
            onClick={() => setFilter("Tshirts")}
            className={`text-xl barlowFont font-bold ${filter === "Tshirts" ? "text-black" : "text-gray-400"}`}
          >
            Tshirts
          </button>
          <button
            onClick={() => setFilter("Mugs")}
            className={`text-xl barlowFont font-bold ${filter === "Mugs" ? "text-black" : "text-gray-400"}`}
          >
            Mugs
          </button>
        </div>

        <div className='flex items-center justify-center flex-wrap py-8 lg:flex-nowrap gap-5'>
          {
            filteredProducts.map((product) => {
              const { id, name, category, image, price, originalPrice } = product;
              return (
                <Card
                  key={id}
                  id={id}
                  category={category}
                  name={name}
                  image={image}
                  price={price}
                  originalPrice={originalPrice}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  currentModalId={currentModalId}
                  setCurrentModalId={setCurrentModalId}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts;
