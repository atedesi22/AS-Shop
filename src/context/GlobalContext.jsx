import React, { createContext, useState, useEffect, useCallback } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('asshop_cart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('asshop_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('asshop_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('asshop_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Logique immuable : map() garantit qu'on ne touche qu'une seule fois à l'élément
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const isExisting = prev.find((item) => item.name === product.name);
      if (isExisting) {
        return prev.map((item) => 
          item.name === product.name 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback((index, delta) => {
    setCart((prev) => 
      prev.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  }, []);

  const toggleFavorite = useCallback((product) => {
    setFavorites((prev) => {
      const isFav = prev.find((item) => item.name === product.name);
      return isFav 
        ? prev.filter((item) => item.name !== product.name) 
        : [...prev, product];
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      cart, favorites, addToCart, removeFromCart, updateQuantity, toggleFavorite 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};