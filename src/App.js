import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Wrapper/Wrapper";
import AllAnimes from "./Pages/AllAnimes";
import AddAnime from "./Pages/AddAnime";
import Favourites from "./Pages/Favourites";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Profile from "./Pages/About Me/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import VerifyRoute from "./Pages/VerifyRoute/VerifyRoute";
import NotFound from "./Pages/NotFound/NotFound";

// Make sure that API key🔑 of this web application is restricted so you cant use it.🎀

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AllAnimes />
            </PrivateRoute>
          }
          exact
        />
        <Route
          exact
          path="/anime/new"
          element={
            <PrivateRoute>
              <AddAnime />
            </PrivateRoute>
          }
        />
        <Route
          path="/animes/favourites"
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        />
        <Route
          path="/about/me"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/auth/login" element={<Login />} exact />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/verify" element={<VerifyRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
