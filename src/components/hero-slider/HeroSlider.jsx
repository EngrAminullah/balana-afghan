import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import sliderData from "../../assets/fake-data/slider";
import "./slider.css";

const HeroSlider = () => {
  return (
    <section>
      <Container>
        <Slider>
          {sliderData.map((item) => (
            <div>
              <div className="slider_wrapper">
                <div className="slider_content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="slider_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
