import React from "react";

import MainNavigation from "../Navigation/MainNavigation";

import styles from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Wrapper;
