import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const favoriteRepeated = favorite.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorite];

    if (!favoriteRepeated) {
      newList.push(newFavorite);
    } else {
      newList = newList.filter(item => item.id !== newFavorite.id);
    }

    setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}