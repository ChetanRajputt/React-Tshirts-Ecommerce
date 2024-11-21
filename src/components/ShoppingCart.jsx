import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import ProductContext from '../context/ProductContext';
import products from '../constant/products.json';

const ShopCart = ({ id,image, name, price }) => {
  const { removeToCart, updateQuantity,addToCart } = useContext(ProductContext);

  const [quantity, setQuantity] = React.useState(1);


  const handleQuantityChange = (action) => {
    if (action === 'increment') {
        setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
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
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="object-cover w-16 h-16 mr-4 rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">
        ₹{price.toFixed(2)} x {quantity} = ₹{(price * quantity).toFixed(2)}
        </p>
        <div className="flex items-center mt-2 space-x-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
             onClick={() => handleQuantityChange('decrement')}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => handleQuantityChange('increment')}>
            +
          </button>
        </div>
      </div>
      <button
        className="ml-4 text-gray-500 hover:text-red-600"
        onClick={() => removeToCart(id)}
      >
        <IoMdClose size={24} />
      </button>
    </div>
  );
};

export default ShopCart;
