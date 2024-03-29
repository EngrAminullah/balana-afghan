import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { sliderData } from "../../assets/fake-data/slider";
import "./slider.css";

const HeroSlider = () => {
  const settings={
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000
  }
  return (
    <section>
      <Container>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div
                className="slider_wrapper d-flex align-items-center 
              justify-content-between pt-5"
              >
                <div className="slider_content w-50 ps-2">
                  <h2 className="mb-3">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">Explore Services</button>
                </div>
                <div className="slider_img w-30" style={{backgroundColor:"#faf8f3", marginLeft:"5px"}}>
                  <img src={item.imgUrl} alt="" style={{borderRadius:"100%", width:"70%", height:"auto", backgroundColor:"FAF8F3"}}/>
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
