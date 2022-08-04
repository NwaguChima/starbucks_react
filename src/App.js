import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebase";
import SignupScreen from "./screens/SignupScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomeScreen />
                <Fade>
                  <Footer />
                </Fade>
              </>
            }
          />
          <Route
            path="/account/signin"
            element={user ? <Navigate to="/menu" /> : <LoginScreen />}
          />
          <Route
            path="/account/create"
            element={user ? <Navigate to="/menu" /> : <SignupScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
