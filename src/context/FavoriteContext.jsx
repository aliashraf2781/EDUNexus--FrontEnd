import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (course) => {
    setFavorites((prev) => {
      const exists = prev.find((c) => String(c.id) === String(course.id));
      if (exists) {
        return prev.filter((c) => String(c.id) !== String(course.id));
      } else {
        return [...prev, course];
      }
    });
  };

  const isFavorite = (id) => favorites.some((c) => String(c.id) === String(id));

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
