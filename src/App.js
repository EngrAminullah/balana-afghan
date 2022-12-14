import React from "react";
import "./app.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/about";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
