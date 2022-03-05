import React, { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext";
import Card from "../../Components/UI/Card";

import styles from "./VerifyRoute.module.css";
import { Link } from "react-router-dom";

function VerifyRoute() {
  const authContext = useContext(AuthContext);
  const currentUser = authContext.currentUser;
  return (
    <section>
      <h1>
        Verify Email <span className="emoji-span">🔑</span>
      </h1>
      <Card className={styles.verify_card}>
        {!currentUser && (
          <h3>
            Please <span>Signup</span> First! 🔒
          </h3>
        )}

        {currentUser && !currentUser.emailVerified && (
          <h3>
            Visit <span>{currentUser && currentUser.email}</span> and Verify
            first!
          </h3>
        )}

        {currentUser && currentUser.emailVerified && (
          <h3>
            Your <span>{currentUser && currentUser.email}</span> Mail is
            Verified!
          </h3>
        )}

        {currentUser && currentUser.emailVerified && (
          <div className={styles.actions}>
            <Link to="/">Get Started!</Link>
          </div>
        )}
      </Card>
    </section>
  );
}

export default VerifyRoute;
