import React, { useContext } from "react";

import AnimeList from "../Components/Animes/AnimeList";
import { FavouritesContext } from "../Context/FavouritesContext";

function Favourites() {
  const favouritesContext = useContext(FavouritesContext);
  return (
    <section>
      {favouritesContext.favourites.length > 0 ? (
        <h1>
          Favourites <span className="emoji-span">❤</span>
        </h1>
      ) : (
        <h1>
          No Favourites Found.<span className="emoji-span">💔</span>
        </h1>
      )}
      <AnimeList animes={favouritesContext.favourites} />
    </section>
  );
}

export default Favourites;
