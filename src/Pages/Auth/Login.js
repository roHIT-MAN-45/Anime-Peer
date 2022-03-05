import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";
import Card from "../../Components/UI/Card";

import styles from "./Auth.module.css";

function Login() {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await authContext.loginUser(
        emailRef.current.value,
        passRef.current.value
      );

      if (
        emailRef.current.value.includes("@") &&
        passRef.current.value.length >= 6
      ) {
        navigate("/");
      }
    } catch (err) {
      alert("Invalid Credentials.");
      console.log(err.message);
    }
  };
  return (
    <section>
      <h1>Login 📌</h1>
      <Card>
        <form className={styles.form} onSubmit={loginSubmitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passRef} />
          </div>
          <div className={styles.actions}>
            <button onClick={loginSubmitHandler} type="submit">
              Login
            </button>
          </div>
          <div className={styles.authlink}>
            <p>Not a member?</p>
            <Link to="/auth/signup">signup</Link>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default Login;
