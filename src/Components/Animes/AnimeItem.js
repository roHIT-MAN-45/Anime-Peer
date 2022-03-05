import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";

import { FavouritesContext } from "../../Context/FavouritesContext";
import { AuthContext } from "../../Context/AuthContext";
import Card from "../UI/Card";

import styles from "./AnimeItem.module.css";

function AnimeItem(props) {
  const authContext = useContext(AuthContext);
  const currentUser = authContext.currentUser;
  const favouritesContext = useContext(FavouritesContext);
  const favourite = useContext(FavouritesContext).isFavorite(props.id);

  const favouriteButtonHandler = () => {
    if (favourite) {
      favouritesContext.removeFromFavourites(props.id);
    } else {
      favouritesContext.addToFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        author: props.author,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
          <p>{props.description}</p>
        </div>
        {currentUser && currentUser.emailVerified && (
          <div className={styles.actions}>
            <AiFillHeart
              onClick={favouriteButtonHandler}
              className={favourite && styles.toggel}
            />
          </div>
        )}
      </Card>
    </li>
  );
}

export default AnimeItem;
