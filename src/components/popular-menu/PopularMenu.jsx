import React from "react";
import "./popular-menu.css";

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import Header from "../header/Header";

const PopularMenu = () => {
  return (
    <>
      <Header />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="15" className="mb-5">
              <h2 className="popular_menu-title"> Balana Popular Menu</h2>
            </Col>
            {popularMenuFood.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularMenu;
