import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  addToFavourite: (favAnime) => {},
  removeFromFavourites: (animeId) => {},
  isFavorite: (animeId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavoritesHandler = (favAnime) => {
    setFavourites((prevFav) => {
      return prevFav.concat(favAnime);
    });
  };

  const removeFromFavouritesHandler = (animeId) => {
    setFavourites((prevFav) => {
      return prevFav.filter((favAnime) => favAnime.id !== animeId);
    });
  };

  const isFavoriteHandler = (animeId) => {
    return favourites.some((favAnime) => favAnime.id === animeId);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addToFavourite: addToFavoritesHandler,
        removeFromFavourites: removeFromFavouritesHandler,
        isFavorite: isFavoriteHandler,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

// On refresh favourites will be cleared 🤷‍♂️
