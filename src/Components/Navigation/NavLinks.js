import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import styles from "./NavLinks.module.css";

function Navlinks(props) {
  const authContext = useContext(AuthContext);
  const currentUser = authContext.currentUser;

  const logoutHandler = async () => {
    try {
      await authContext.logoutUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ul
      className={`${styles.headerlist} ${props.toggle && styles.toggle}`}
      onClick={props.toggleList}
    >
      {currentUser && currentUser.emailVerified && (
        <li>
          <NavLink to="/">Animes</NavLink>
        </li>
      )}

      {currentUser && currentUser.emailVerified && (
        <li>
          <NavLink to="/anime/new">Add Anime</NavLink>
        </li>
      )}

      {currentUser && currentUser.emailVerified && (
        <li>
          <NavLink to="/animes/favourites">Favorites</NavLink>
        </li>
      )}

      {currentUser && currentUser.emailVerified && (
        <li>
          <NavLink to="/about/me">About Me</NavLink>
        </li>
      )}

      {!currentUser && (
        <li>
          <NavLink to="/auth/login">Authenticate</NavLink>
        </li>
      )}

      {currentUser && currentUser.emailVerified && (
        <li onClick={logoutHandler}>
          <NavLink to="/auth/login">Logout</NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navlinks;
