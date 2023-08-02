import React from "react";
import "../styles/Card.css";

const Card = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img
            src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
            alt="nike-air-shoe"
          />
        </div>

        <div class="contentBx">
          <h2>Nike W Shoes</h2>

          <div class="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>

          <div class="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
