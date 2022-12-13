import React, { Fragment } from "react";
import ChooseUs from "../components/choose-us/ChooseUs";
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import MenuPack from "../components/menu-pack/MenuPack";
import PopularMenu from "../components/popular-menu/PopularMenu";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs/>
      <MenuPack />
    </Fragment>
    
  );
};

export default Home;
