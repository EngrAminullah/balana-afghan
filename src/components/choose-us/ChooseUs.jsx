import React from "react";
import "./choose-us.css";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../assets/images/slider2.png";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={pastaImg} alt="" className="w-100" />
          </Col>
          <Col lg="6" md="6">
            <div className="choose_content">
              <h4>Who we are?</h4>
              <h2>Take a look at the benefits we offer you</h2>
              <p>
                A restaurant is not just a place but true combination of taste,
                environment and Class. Located in the center of the Capital,
                Balana restaurant is a fine dining restaurant with a comfortable
                atmosphere and high quality delicious food. We are proud
                providers of a variety of appetizers, delicious Afghan cuisine
                and unique presentation style service.
              </p>
            </div>
            <div className="features mt-4">
              <div
                className="feature1 d-flex align-items-center
              gap-5
              "
              >
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
              <div
                className="feature1 mt-3 d-flex align-items-center
              gap-5
              "
              >
                <div className="single_feature">
                  <span className="feature_icon-3">
                    <i class="ri-secure-payment-line"></i>
                  </span>
                  <h6>Secure Payment</h6>
                  <p>Lorem ipsum dolor isir amet.</p>
                </div>
                <div className="single_feature">
                  <span className="feature_icon-4">
                    <i class="ri-24-hours-line"></i>
                  </span>
                  <h6>24/7 Hours Support</h6>
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
