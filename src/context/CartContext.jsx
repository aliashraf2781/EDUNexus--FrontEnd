import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if(stored) {
        try {
            setCart(JSON.parse(stored));
        } catch(e) {
            console.error("Invalid JSON in localstorage:", e);
            localStorage.removeItem('cart');
            setCart([]);
        }
    } else {
        setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course) => {
    const exists = cart.find((c) => c._id === course._id);
    if (!exists) {
      setCart([...cart, { ...course }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const updateCourseInCart = (_id, updates) => {
    setCart((prev) =>
      prev.map((c) => (c._id === _id ? { ...c, ...updates } : c))
    );
  };

  const toggleCartItem = (course) => {
    const exists = cart.find((c) => c._id === course._id);
    if (exists) {
      const updatedCart = cart.filter((c) => c._id !== course._id);
      setCart(updatedCart); 
    } else {
      setCart([...cart, { ...course }]); 
    }
  };

  const inCart = (_id) => cart.some((c) => c._id === _id);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCourseInCart, inCart, toggleCartItem }}>
      {children}
    </CartContext.Provider>
  );
};