import React from "react";

import "./aboutus.css";


function AboutUs() {
  return (
    <div className="about__us">
      <div className="main__au">
        <h1>
          Islamabad:
          <br /> Where the fire begins
        </h1>
      </div>
      <div
        className="text__au"
      >
        <div className="p2">
          <h3 style={{ marginTop: "20px" }}>What We Are?</h3>
          <p
            style={{
              paddingTop: "40px",
              fontFamily: "sans-serif",
              lineHeight: "30px",
            }}
          >
            A restaurant is not just a place but true combination of taste,
            environment and Class. Located in the center of the Capital, Balana
            restaurant is a fine dining restaurant with a comfortable atmosphere
            and high quality delicious food. We are proud providers of a variety
            of appetizers, delicious Afghan cuisine and unique presentation
            style service.
          </p>
        </div>
      </div>
      <div
        className="text__au"
        style={{
          marginTop: "30px",
          
        }}
      >
        <div className="p2">
          <p style={{ fontFamily: "sans-serif", lineHeight: "30px" }}>
            In addition to the quality and delicious food, you will love the
            pleasant surroundings of our restaurant, the perfect destination.
            The restaurant offers a variety of interesting, cultural and
            colorful dishes served in a very short time. Customers are the
            source of our success, so we are always interested in serving them.
            We have updated our services with new products, highly qualified
            staff and smart managers. Balana Restaurant is your perfect choice
            for your family and friends.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
