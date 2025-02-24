import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../entity/meal";

interface FavoriteContextType {
  favorites: Meal[];
  toggleFavorite: (meal: Meal) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites, FavoriteProvider içinde kullanılmalıdır.");
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Favorileri yüklerken hata oluştu:", error);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (meal: Meal) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      updatedFavorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
    } else {
      updatedFavorites = [...favorites, meal];
    }

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
