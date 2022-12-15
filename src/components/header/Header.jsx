import React, { useRef } from "react";
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import ReactWhatsapp from "react-whatsapp";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Menu",
    url: "/menu",
  },

  {
    display: "About Us",
    url: "/aboutus",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <img
              src={logo}
              alt=""
              href="http://wa.me/+923420950576"
              target="blanket"
            />
          </div>
          <div className="nav_menu " ref={menuRef}>
            <div className="nav_list_wrapper d-flex align-items-center gap-5">
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="menu_right">
                <div className="custome_search">
                  <button>Reserve Table</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_icon">
            <ReactWhatsapp
              number="+923129165664"
              message="How can Balana Afghan Serve You"
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
