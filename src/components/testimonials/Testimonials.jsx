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
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider_wrapper d-flex align-items-center gap-5">
              <div className="slider_content w-50">
                <h2 className="mb-4">What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        If you're in the mood of eating Afghani dishes, rush to
                        The Kabul Restaurant. A cozy and comfortable place for
                        dining in with friends and family.
                      </p>
                      <h6>Atari Technology</h6>
                      <p>Software Developement Team</p>
                    </div>
                  </div>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        It was an incredible dinner there. Traditional foods
                        tantalize your taste buds. The mesmerizing smoke from
                        the grill adds more flavor to your food.
                      </p>
                      <h6>Aminullah</h6>
                      <p>Software Developer in Islamabad</p>
                    </div>
                  </div>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        In my opinion, Kabul restaurant is the best Afghan
                        Restaurant in Islamabad. The quality, quantity, and
                        taste of the food are amazing value for money.
                      </p>
                      <h6>Atiqa Jabeen</h6>
                      <p>Islamabad Resident</p>
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
