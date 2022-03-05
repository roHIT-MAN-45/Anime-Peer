import React from "react";
import { Link } from "react-router-dom";

import Card from "../../Components/UI/Card";

import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section>
      <Card className={styles.notfound}>
        <h1>
          Page Not Found. <span className="emoji-span">🔍</span>
        </h1>

        <div className={styles.return}>
          <Link to="/">Back</Link>
        </div>
      </Card>
    </section>
  );
}

export default NotFound;
