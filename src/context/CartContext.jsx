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
    const exists = cart.find((c) => c.id === course.id);
    if (!exists) {
      setCart([...cart, { ...course }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };

  const updateCourseInCart = (id, updates) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
  };

  const inCart = (id) => cart.some((c) => c.id === id);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCourseInCart, inCart }}>
      {children}
    </CartContext.Provider>
  );
};