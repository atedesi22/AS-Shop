import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialisation à partir du localStorage pour éviter de perdre les données au refresh
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('asshop_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('asshop_favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // Sauvegarde automatique à chaque changement
  useEffect(() => {
    localStorage.setItem('asshop_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('asshop_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Logique du Panier
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Logique des Favoris
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFav = prev.find((item) => item.name === product.name);
      if (isFav) return prev.filter((item) => item.name !== product.name);
      return [...prev, product];
    });
  };

  return (
    <GlobalContext.Provider value={{ 
      cart, addToCart, removeFromCart, 
      favorites, toggleFavorite 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};