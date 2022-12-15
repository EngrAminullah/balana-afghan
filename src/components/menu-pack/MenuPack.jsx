import React, { useState, useEffect } from "react";
import "./menu-pack.css";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../product-card/ProductCard";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  coffeeProducts,
  Pulao,
} from "../../assets/fake-data/products";

const MenuPack = () => {
  const [filter, setFilter] = useState("RICE-MENU");
  const [product, setProduct] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProduct(riceMenuProducts);
    }
    if (filter === "FAST_FOOD") {
      setProduct(fastFoodProducts);
    }
    if (filter === "Pulao") {
      setProduct(Pulao);
    }
    if (filter === "DESSERT") {
      setProduct(dessertProducts);
    }
    if (filter === "COFFEE") {
      setProduct(coffeeProducts);
    }
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="menu_title">Our Menu Pack</h2>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "FAST-FOOD" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOOD")}
            >
              BBQ
            </button>
            <button
              className={`filter-btn ${
                filter === "RICE-MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Rosh
            </button>
            <button
              className={`filter-btn ${
                filter === "Pulao" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Pulao")}
            >
              Pulao
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Balana Karhahi
            </button>
            <button
              className={`filter-btn ${
                filter === "COFFEE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COFFEE")}
            >
              Platters
            </button>
            <button
              className={`filter-btn ${
                filter === "COFFEE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COFFEE")}
            >
              Cold Drinks
            </button>
            <button
              className={`filter-btn ${
                filter === "COFFEE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COFFEE")}
            >
              Hot Drinks
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Desserts
            </button>
          </Col>
          {product.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
