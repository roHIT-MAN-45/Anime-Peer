import React from "react";

import Copyright from "../../Components/Copyright/Copyright";

import styles from "./Profile.module.css";

function Profile() {
  return (
    <section>
      <h1>About Me 🎉</h1>
      <div className={styles.card}>
        <span className={styles.level}>Devloper</span>
        <img src="/images/p3.png" alt="" className={styles.picture} />
        <h2>
          Rohit <span>Chavan</span>
        </h2>
        <p>Full Stack Web Devloper | MERN Stack Devloper</p>

        <div className={styles.buttons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rohitchavan110116114/"
            className={styles.primary}
          >
            Know More
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCCn_hk6vKrcrJCeyJBLJglA"
            className={styles.secondary}
          >
            Subscribe
          </a>
        </div>

        <div className={styles.skills}>
          <h4>Skills</h4>
          <ul>
            <li>REACT JS</li>
            <li>MERN STACK</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>BOOTSTRAP</li>
            <li>NODE JS</li>
            <li>VANILLA JS</li>
            <li>FIREBASE</li>
            <li>REDUX</li>
            <li>ROUTING</li>
          </ul>
        </div>
      </div>
      <Copyright />
    </section>
  );
}

export default Profile;
