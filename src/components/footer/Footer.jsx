import React from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import ReactWhatsapp from "react-whatsapp";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
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
  const openInsta = (url) => {
    const newWindow = window.open(
      "https://instagram.com/balanaafghan?igshid=YmMyMTA2M2Y=",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  const openMap = (url) => {
    const newWindow = window.open(
      "https://www.google.com/maps/place/Balana+Afghan+Restaurant+Islamabad/@33.7115769,72.969752,13z/data=!4m10!1m2!2m1!1sbalana+afghan+restaurant+islamabad,+ayub+market,+markaz,+f-8+markaz+f+8+markaz+f-8,+islamabad!3m6!1s0x38dfbf4d0e5e4611:0xf8166b169bed3a89!8m2!3d33.7115769!4d73.0397898!15sCl1iYWxhbmEgYWZnaGFuIHJlc3RhdXJhbnQgaXNsYW1hYmFkLCBheXViIG1hcmtldCwgbWFya2F6LCBmLTggbWFya2F6IGYgOCBtYXJrYXogZi04LCBpc2xhbWFiYWRaWyJZYmFsYW5hIGFmZ2hhbiByZXN0YXVyYW50IGlzbGFtYWJhZCBheXViIG1hcmtldCBtYXJrYXogZiA4IG1hcmtheiBmIDggbWFya2F6IGYgOCBpc2xhbWFiYWSSARJhZmdoYW5pX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11tmw_6dtw",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  const openFacebook = (url) => {
    const newWindow = window.open(
      "https://www.facebook.com/profile.php?id=100085743417901",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo">
              <img src={logo} alt="" />

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
              <ListGroupItem
                className="link_item d-flex align-items-center gap-3"
                onClick={() =>
                  openMap(
                    "https://www.google.com/maps/place/Balana+Afghan+Restaurant+Islamabad/@33.7115769,72.969752,13z/data=!4m10!1m2!2m1!1sbalana+afghan+restaurant+islamabad,+ayub+market,+markaz,+f-8+markaz+f+8+markaz+f-8,+islamabad!3m6!1s0x38dfbf4d0e5e4611:0xf8166b169bed3a89!8m2!3d33.7115769!4d73.0397898!15sCl1iYWxhbmEgYWZnaGFuIHJlc3RhdXJhbnQgaXNsYW1hYmFkLCBheXViIG1hcmtldCwgbWFya2F6LCBmLTggbWFya2F6IGYgOCBtYXJrYXogZi04LCBpc2xhbWFiYWRaWyJZYmFsYW5hIGFmZ2hhbiByZXN0YXVyYW50IGlzbGFtYWJhZCBheXViIG1hcmtldCBtYXJrYXogZiA4IG1hcmtheiBmIDggbWFya2F6IGYgOCBpc2xhbWFiYWSSARJhZmdoYW5pX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11tmw_6dtw"
                  )
                }
              >
                <i class="ri-map-pin-line"></i>Balana Afghan: Chaudhry Ayub
                Market F8 Markaz Islamabad
              </ListGroupItem>
              <ListGroupItem
                className="link_item d-flex align-items-center gap-3"
                onClick={() =>
                  openFacebook(
                    "https://www.facebook.com/profile.php?id=100085743417901"
                  )
                }
              >
                <i class="ri-facebook-line"></i>Balana Afghan
              </ListGroupItem>
              <ListGroupItem
                className="link_item d-flex align-items-center gap-3"
                onClick={() =>
                  openInsta(
                    "https://instagram.com/balanaafghan?igshid=YmMyMTA2M2Y="
                  )
                }
              >
                <i class="ri-instagram-line"></i>
                @balanaafghan
              </ListGroupItem>
              <ListGroupItem className="link_item d-flex align-items-center gap-3">
                <i class="ri-whatsapp-line"></i>
                <ReactWhatsapp
                  number="+923129165664"
                  message="How can Balana Afghan Serve You"
                  class="btn"
                  className="whatsapp"
                >
                  +92312-9165664
                </ReactWhatsapp>
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
