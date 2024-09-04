import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface FavoriteItem {
  id: string;
  [key: string]: any;
}

interface FavoritesContextProps {
  favorite: FavoriteItem[];
  setFavorite: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
  addFavorite: (newFavorite: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

FavoritesContext.displayName = "Favoritos";

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorite, setFavorite] = useState<FavoriteItem[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (newFavorite: FavoriteItem) => {
    const favoriteRepeated = favorite.some(
      (item) => item.id === newFavorite.id
    );
    let newList = [...favorite];

    if (!favoriteRepeated) {
      newList.push(newFavorite);
    } else {
      newList = newList.filter((item) => item.id !== newFavorite.id);
    }

    setFavorite(newList);
  };

  const removeFavorite = (id: string) => {
    setFavorite(favorite.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorite, setFavorite, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavoriteContext(): FavoritesContextProps {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error(
      "useFavoriteContext must be used within a FavoritesProvider"
    );
  }
  return context;
}
