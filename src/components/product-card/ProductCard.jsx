import React from "react";
import "./card.css";

const ProductCard = (props) => {
  const { title, imgUrl, price, description } = props.item;
  return (
    <div className="single_product">
      <div className="product_img ">
        <img src={imgUrl} alt="" className="w-100 d-flex" />
      </div>

      <div className="product_content">
        <h6>{title}</h6>
        <div className="rating text-center">
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
        </div>

        <p>{description}</p>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            <pre>
              {" "}
              PKR <span>{price}</span>
            </pre>
            <pre>
              {" "}
              <span className="heart">
                <i class="ri-heart-line ri-2x"></i>
              </span>
            </pre>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
