import React from "react";
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
          <div className="nav_manu">
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu_right">
            <div className="custome_search">
              <input type="text" placeholder="search item...." />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </div>
          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
