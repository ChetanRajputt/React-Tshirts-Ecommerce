import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import ProductContext from '../context/ProductContext';
import ShopCart from '../components/ShoppingCart';
const CartPage = () => {
  const { shoppingItems, addSubTotalAmount } = useContext(ProductContext);


  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>

      {/* If Cart is Empty */}
      {!shoppingItems.length ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-xl text-gray-500">Your cart is empty.</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Cart Items */}
          <div className="w-full space-y-4 lg:w-3/4">
            {shoppingItems && shoppingItems.map((item) => (
              <ShopCart
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md lg:w-1/4">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${addSubTotalAmount}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${addSubTotalAmount}</span>
            </div>
            <button
              className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
