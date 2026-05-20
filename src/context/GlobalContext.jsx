import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [cart, favorites]);

  const addToCart = (product) => setCart([...cart, product]);
  const addToFavorites = (product) => setFavorites([...favorites, product]);
  const removeFromCart = (index) => {
  const newCart = cart.filter((_, i) => i !== index);
  setCart(newCart);
};


  return (
    <GlobalContext.Provider value={{ cart, addToCart, favorites, addToFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};