import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    // Check if the product already exists in the cart
    console.log(product);
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, update the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // If it's a new product, add it to the cart
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    console.log(cartItems);
  };

  const updateCartQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCartQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
