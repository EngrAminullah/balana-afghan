import React, { useRef,useContext } from "react";
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import ReactWhatsapp from "react-whatsapp";
import { NavContext } from '../../contexts/NavContexts';
import { Link } from "react-router-dom";


// const navLinks = [
//   {
//     display: "Home",
//     url: "/",
//   },
//   {
//     display: "Menu",
//     url: "/menu",
//   },

//   {
//     display: "About Us",
//     url: "/aboutus",
//   },
//   {
//     display: "Contact Us",
//     url: "/contact",
//   },
// ];

const Header = () => {
  const menuRef = useRef();
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const handleClick = (navLinkId,scrollToId) => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};
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

              <li onClick={()=>handleClick('Hero','heroContainer')}>
                <Link activeClass="active" smooth spy to="home">
                  Home
                </Link>
              </li>
              <li onClick={()=>handleClick('Menu','menuContainer')}>
                <Link activeClass="active" smooth spy to="menu">
                  Menu
                </Link>
              </li>
              <li onClick={()=>handleClick('About','aboutContainer')}>
                <Link activeClass="active" smooth spy to="about">
                  About
                </Link>
              </li>


              <li onClick={()=>handleClick('Contact','contactContainer')}>
                <Link activeClass="active" smooth spy to="contact">
                  Contact Us
                </Link>
              </li>

                {/* {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))} */}
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
