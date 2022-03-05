import React, { useContext, useState } from "react";

import { AnimeContext } from "../Context/AnimeContext";
import AddAnimeForm from "../Components/Animes/AddAnimeForm";

function AddAnime() {
  const [message, setMessage] = useState("");
  const animeContext = useContext(AnimeContext);

  const addAnimeHandler = async (animeData) => {
    try {
      await animeContext.addAnime(animeData);
      setMessage("Anime Added!");
    } catch (error) {
      setMessage("Adding Anime Failed Please Try Again Later!");
      console.log(error.message);
    }
  };

  return (
    <section>
      <p>{message !== "" && message}</p>
      <h1>
        Add Anime <span className="emoji-span">🚀</span>
      </h1>
      <AddAnimeForm onAddAnime={addAnimeHandler} />
    </section>
  );
}

export default AddAnime;
