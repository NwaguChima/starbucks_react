import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  // let user = useSelector(selectUser);
  let user = null;

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
            element={user ? <Navigate to="/" /> : <LoginScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
