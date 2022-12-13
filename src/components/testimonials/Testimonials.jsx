import React from "react";
import "./testimonials.css";
import { Container, Row, Col } from "reactstrap";
import testimonialImg from "../../assets/images/review1.png";

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6"></Col>
          <Col lg="6">
            <img src={testimonialImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
