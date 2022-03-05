import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const authContext = useContext(AuthContext);
  const currentUser = authContext.currentUser;

  // This code redirects User to the login page on refresh(did not log out user 🔒)
  return currentUser && currentUser.emailVerified ? (
    children
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default PrivateRoute;
