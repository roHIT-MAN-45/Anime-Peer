import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { createContext } from "react";
import { database } from "../Firebase";

export const AnimeContext = createContext({});

export const AnimeContextProvider = (props) => {
  const animeCollectionRef = collection(database, "Animes");

  const addAnime = (newAnime) => {
    return addDoc(animeCollectionRef, {
      ...newAnime,
    });
  };

  // Not in use ❌
  const updateAnime = (id, animeData) => {
    const animeDoc = doc(database, "Animes", id);
    return updateDoc(animeDoc, animeData);
  };

  // Not in use ❌
  const deleteAnime = (id) => {
    const animeDoc = doc(database, "Animes", id);
    return deleteDoc(animeDoc);
  };

  const getAllAnimes = () => {
    return getDocs(animeCollectionRef);
  };

  // Not in use ❌
  const getAnime = (id) => {
    const animeDoc = doc(database, "Animes", id);
    return getDoc(animeDoc);
  };

  return (
    <AnimeContext.Provider
      value={{
        addAnime,
        updateAnime,
        deleteAnime,
        getAllAnimes,
        getAnime,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};
