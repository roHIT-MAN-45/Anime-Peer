import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../Components/UI/Card";
import { AuthContext } from "../../Context/AuthContext";

import styles from "./Auth.module.css";

function Signup() {
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const signupSubmitHandler = async (e) => {
    e.preventDefault();

    if (passRef.current.value !== confirmPassRef.current.value) {
      return alert("Password did not match.");
    }
    try {
      await authContext.registerUser(
        emailRef.current.value,
        passRef.current.value
      );
    } catch (error) {
      console.log(error.message);
    }

    if (
      emailRef.current.value.includes("@") &&
      passRef.current.value.length > 5 &&
      passRef.current.value === confirmPassRef.current.value
    ) {
      navigate("/verify");
    }
  };
  return (
    <section>
      <h1>Signup 🔒</h1>
      <Card>
        <form className={styles.form} onSubmit={signupSubmitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              required
              ref={confirmPassRef}
            />
          </div>
          <div className={styles.actions}>
            <button onClick={signupSubmitHandler} type="submit">
              Signup
            </button>
          </div>
          <div className={styles.authlink}>
            <p>Already a member?</p>
            <Link to="/auth/login">login</Link>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default Signup;
