import React from "react";

import AnimeItem from "./AnimeItem";

import styles from "./AnimeList.module.css";

function AnimeList(props) {
  return (
    <ul className={styles.list}>
      {props.animes.map((anime) => (
        <AnimeItem
          key={anime.id}
          id={anime.id}
          title={anime.title}
          description={anime.description}
          image={anime.image}
          author={anime.author}
        />
      ))}
    </ul>
  );
}

export default AnimeList;
