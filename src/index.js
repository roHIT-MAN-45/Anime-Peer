import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { AnimeContextProvider } from "./Context/AnimeContext";
import { FavoritesContextProvider } from "./Context/FavouritesContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <AnimeContextProvider>
          <FavoritesContextProvider>
            <App />
          </FavoritesContextProvider>
        </AnimeContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
