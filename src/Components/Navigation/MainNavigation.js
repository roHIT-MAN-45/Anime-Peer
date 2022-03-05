import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import NavLinks from "./NavLinks";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const [bariconToggle, setBariconToggle] = useState(false);

  const toggleHeaderHandler = () => {
    setBariconToggle((prev) => !prev);
  };

  return (
    <nav>
      <div className={styles.logo}>
        Anime <span>Peer</span>
      </div>

      <NavLinks toggle={bariconToggle} toggleList={toggleHeaderHandler} />

      <label className={styles.menuicon} onClick={toggleHeaderHandler}>
        {bariconToggle ? <FaTimes /> : <FaBars />}
      </label>
    </nav>
  );
}

export default MainNavigation;
