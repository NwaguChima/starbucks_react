import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
