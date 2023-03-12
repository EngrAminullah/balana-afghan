import React, { useRef, useContext } from "react";
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.jpeg";
import ReactWhatsapp from "react-whatsapp";
import { NavContext } from "../../contexts/NavContexts";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef();
  const nonActiveMenuRef = useRef();
  const { setActiveNavLinkId } = useContext(NavContext);
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  const menuInActiveToggle = () =>
    nonActiveMenuRef.current.classList.toggle("non_active_menu");
  const handleClick = (navLinkId, scrollToId) => {
    menuInActiveToggle();
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <img
              src={logo}
              alt=""
              href="http://wa.me/+923129165664"
              target="blanket"
            />
          </div>
          <div ref={nonActiveMenuRef}>
            <div className="nav_menu " ref={menuRef}>
              <div className="nav_list_wrapper d-flex align-items-center gap-5">
                <ul className="nav_list">
                  <li onClick={() => handleClick("Hero", "heroContainer")}>
                    <Link activeClass="active" smooth spy to="home">
                      Home
                    </Link>
                  </li>
                  <li onClick={() => handleClick("Menu", "menuContainer")}>
                    <Link activeClass="active" smooth spy to="services">
                      Services
                    </Link>
                  </li>
                  <li onClick={() => handleClick("About", "aboutContainer")}>
                    <Link activeClass="active" smooth spy to="about">
                      About Us
                    </Link>
                  </li>

                  <li
                    onClick={() => handleClick("Contact", "contactContainer")}
                  >
                    <Link activeClass="active" smooth spy to="footer">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cart_icon">
            <ReactWhatsapp
              number="+971 56 549 9505"
              message="Thank you for choosing a Hybrid Garage CO for all your automotive needs. We look forward to serving you and providing you with exceptional service that will keep you coming back for all your vehicle needs."
              class="btn"
              className="whatsapp"
            >
              <span>
                <i class="ri-whatsapp-line"></i>
              </span>
            </ReactWhatsapp>
          </div>

          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
