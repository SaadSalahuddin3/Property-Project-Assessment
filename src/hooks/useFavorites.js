// src/hooks/useFavorites.js
import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favoriteProperties';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (property) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === property.id);
      if (exists) {
        return prev.filter((p) => p.id !== property.id);
      } else {
        return [...prev, property];
      }
    });
  };

  const isFavorite = (id) => favorites.some((p) => p.id === id);

  return { favorites, toggleFavorite, isFavorite };
}
