import React from "react";
import { useContext } from "react";
import { useState } from "react";

import { AnimeContext } from "../Context/AnimeContext";
import AnimeList from "../Components/Animes/AnimeList";
import { useEffect } from "react";

function AllAnimes() {
  const [loadedAnimes, setLoadedAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAllAnimes = useContext(AnimeContext).getAllAnimes;

  useEffect(() => {
    setIsLoading(true);
    const fetchAllAnimes = async () => {
      try {
        const data = await getAllAnimes();

        setLoadedAnimes(
          data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };

    fetchAllAnimes();
  }, [setIsLoading, setLoadedAnimes, getAllAnimes]);

  if (isLoading) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (loadedAnimes.length === 0 || !loadedAnimes) {
    return (
      <div className="center">
        <h2>No Animes Found!</h2>
      </div>
    );
  }

  return (
    <section>
      <h1>
        All Animes <span className="emoji-span">🌺</span>
      </h1>
      <AnimeList animes={loadedAnimes} />
    </section>
  );
}

export default AllAnimes;
