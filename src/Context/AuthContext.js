import { React, createContext, useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth, database } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        sendEmailVerification(cred.user);
        console.log(cred);
        setDoc(doc(database, "UserData", cred.user.uid), {
          email: email,
          createdAt: new Date(),
        });
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log("User is not logged in.");
      }
    });

    return unSubscribe;
  }, []);

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setCurrentUser(null);
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, loginUser, logoutUser, registerUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
