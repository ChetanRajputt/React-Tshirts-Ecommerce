import React from 'react';

const ProductShowcase = () => {
  return (
    <div className="flex flex-wrap justify-around bg-white p-8">
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Best quality printed tshirts and mugs for all your needs</h2>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center text-center p-4">
        <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/03/tshirt4-400x400.jpg" alt="Printed T-shirt" className="w-1/2 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Get Printed T-shirt @ $25!</h3>
        <a href="#" className="text-blue-500 underline">Visit Store</a>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center text-center p-4">
        <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/mug-white-768x768.jpg" alt="Printed Mug" className="w-1/2 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Get Printed Mug @ $15!</h3>
        <a href="#" className="text-blue-500 underline">Visit Store</a>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center text-center p-4">
        <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2021/02/cotm-img-1-1.png" alt="Get Your Own" className="w-1/2 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Get Your Own</h3>
        <a href="#" className="text-blue-500 underline">Customize</a>
      </div>
    </div>
  );
}

export default ProductShowcase;
