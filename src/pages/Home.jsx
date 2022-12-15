import React, { Fragment } from "react";
import ChooseUs from "../components/choose-us/ChooseUs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import HeroSlider from "../components/hero-slider/HeroSlider";
import MenuPack from "../components/menu-pack/MenuPack";
import PopularMenu from "../components/popular-menu/PopularMenu";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section id="home">
        <HeroSlider />
      </section>
      <section id="menu">
        <PopularMenu />
      </section>
      <section id="aboutus">
        <ChooseUs />
      </section>
      <section id="MenuPack">
        <MenuPack />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Home;
