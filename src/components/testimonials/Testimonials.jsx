import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "reactstrap";
import testimonialImg from "../../assets/images/review2.png";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Row >
          <Col lg="8" className="m-auto">
            <div className="slider_wrapper d-flex align-items-center gap-5">
              <div className="slider_content w-50">
                <h2 className="mb-4">What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h6>Amin</h6>
                      <p> Web Developer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h6>Aminullah</h6>
                      <p> Web Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider_img w-50">
                <img src={testimonialImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
