import React, { useState } from 'react'
import ProductContext from './ProductContext'

const ProductContextProvider = ({ children }) => {

    const [shoppingItems, setShoppingItems] = useState([]);

    const addToCart = (product) => {
        setShoppingItems(prevItems => {
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: product.quantity || 1 }];
            }
        });
    };

    const updateQuantity = (productId, action) => {
        setShoppingItems(prevItems => {
            const existingProduct = prevItems.find(item => item.id === productId)
            if (existingProduct.quantity === 1 && action === 'decrement') {
                removeToCart(productId);
            }
            else {

                if (existingProduct) {
                    if (action === 'increment') {
                        return prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 }
                            : item
                        )
                    }
                    else if (action === 'decrement' && existingProduct.quantity > 1) {
                        return prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 }
                            : item
                        )
                    }
                }
            }
        })
    }

    const removeToCart = (productId) => {
        const newShoppingItems = shoppingItems.filter(item => item.id !== productId);
        setShoppingItems(newShoppingItems);
    }

    const addSubTotalAmount = () => {
        return shoppingItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    // remove console
    console.log(shoppingItems);

    const propsValue = {
        shoppingItems,
        setShoppingItems,
        addToCart,
        removeToCart,
        updateQuantity,
        addSubTotalAmount
    }

    return (
        <ProductContext.Provider value={propsValue}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
