import React from "react";
import "./choose-us.css";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../assets/images/pasta.png";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <img src={pastaImg} alt="" className="w-100" />
          </Col>
          <Col lg="6">
            <div className="choose_content">
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offer you</h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center
              gap-5
              ">
                <div className="single_feature">
                  <span>
                    <i class="ri-whatsapp-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>Lorem ipsum dolor isir amet.</p>
                </div>
                <div className="single_feature">
                  <span className="feature_icon_two">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>Return & Refund</h6>
                  <p>Lorem ipsum dolor isir amet.</p>
                </div>
                
              </div>
              <div className="feature1 d-flex align-items-center
              gap-5
              ">
                <div className="single_feature">
                  <span>
                    <i class="ri-whatsapp-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>Lorem ipsum dolor isir amet.</p>
                </div>
                <div className="single_feature">
                  <span className="feature_icon_two">
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>Return & Refund</h6>
                  <p>Lorem ipsum dolor isir amet.</p>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
