import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
