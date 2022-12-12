import React,{useRef} from "react";
import "./header.css";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Deals",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
];

const Header = () => {

    const menuRef=useRef()
    const menuToggle =()=> menuRef.current.classList.toggle('active_menu')
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              BalanaAfghan
            </h2>
          </div>
          <div className="nav_menu " ref={menuRef}>
            <div className="nav_list_wrapper d-flex align-items-center gap-5">
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a href={item.url} onClick={menuToggle}>{item.display}</a>
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
          <i class="ri-whatsapp-line"></i>
          
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
