import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../../pages/about-us/about";
import Home from "../../pages/Home";
import PopularMenu from "../popular-menu/PopularMenu";

const LocalRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<PopularMenu />} />
        </Routes>
      </Router>
    </div>
  );
};

export default LocalRoute;
