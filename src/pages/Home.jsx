import React, { Fragment } from "react";
import ChooseUs from "../components/choose-us/ChooseUs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import HeroSlider from "../components/hero-slider/HeroSlider";
import MenuPack from "../components/menu-pack/MenuPack";
import PopularMenu from "../components/popular-menu/PopularMenu";
import Testimonials from "../components/testimonials/Testimonials";
import { useNav } from "../customHooks/useNav";

const Home = () => {
  const HeroRef = useNav("Hero");
  const MenuRef = useNav("Menu");
  const AboutRef = useNav("About");
  const ContacttRef = useNav(" Contact");
  return (
    <Fragment>
      <Header />
      <section id="heroContainer" ref={HeroRef}>
        <HeroSlider />
      </section>
      <section id="menuContainer" ref={MenuRef}>
        <PopularMenu />
        <MenuPack />
      </section>
      <section id="aboutContainer" ref={AboutRef}>
        <ChooseUs />
      </section>
      <section id="contactContainer" ref={ContacttRef}>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Home;
