import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";

import styles from "./AddAnimeForm.module.css";

const AddAnimeForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const author = authorRef.current.value;

    const animeData = {
      title,
      description,
      image,
      author,
    };

    props.onAddAnime(animeData);
    navigate("/");
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="text" id="iamge" required ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" required ref={authorRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionRef} />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Anime</button>
        </div>
      </form>
    </Card>
  );
};

export default AddAnimeForm;
