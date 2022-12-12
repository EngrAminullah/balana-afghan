import React from 'react'
import './card.css'

const ProductCard = (props) => {
    const {title, imgUrl, price} =props.item
  return (
    <div className="single_product">
                <div className="product_img ">
                  <img src={imgUrl} alt="" className="w-100"/>
                </div>

                <div className="product_content">
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

                  <h6>{title}</h6>

                  <div className="d-flex align-items-center justify-content-between">
                    <span className="price d-flex align-items-center">
                      Price: Rs <span>{price}</span>
                    </span>
                  </div>
                </div>
              </div>
  )
}

export default ProductCard