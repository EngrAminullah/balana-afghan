import React from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Return & Refund",
    url: "#",
  },
  {
    display: "Payment Method",
    url: "#",
  },
];
const footerLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo">
              <h2 className="d-flex align-items-center gap-1 mb-4">
                <span>
                  <i class="ri-restaurant-2-line"></i>
                </span>
                BalanaAfghan
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_link-title">Info Links</h5>
            <ListGroup>
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem className="link_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="4" sm="6">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup>
              {footerLinks.map((item, index) => (
                <ListGroupItem className="link_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="4" md="4" sm="6">
            <h5 className="footer_link-title">Contact Us</h5>
            <ListGroup>
              <ListGroupItem className="link_item d-flex align-items-center gap-3">
                <i class="ri-map-pin-line"></i>Balana Afghan: Chaudhry Ayub
                Market F8 Markaz Islamabad
              </ListGroupItem>
              <ListGroupItem className="link_item d-flex align-items-center gap-3">
                <i class="ri-facebook-line"></i>Balana Afghan
              </ListGroupItem>
              <ListGroupItem className="link_item d-flex align-items-center gap-3">
                <i class="ri-instagram-line"></i>@balanaafghan
              </ListGroupItem>
              <ListGroupItem className="link_item d-flex align-items-center gap-3">
                <i class="ri-whatsapp-line"></i>+92312-9165664
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div className="footer_bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                © copyright 2022, developed by Engr Aminullah (Atari Tech). All
                rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
