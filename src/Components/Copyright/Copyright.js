import React from "react";

import Card from "../UI/Card";

import styles from "./Copyright.module.css";

function Copyright() {
  return (
    <Card className={styles.copy_card}>
      <p>
        Copyright © Anime Peer <span>Created By Rohit Sunil Chavan</span> All
        Rights Reserved.
      </p>
    </Card>
  );
}

export default Copyright;
