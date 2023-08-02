import React from "react";
import { Link } from "react-router-dom";
import product_card from "../helpers/Product.data";
import "../styles/Productlist.css";

const productlist = () => {

    const click= async()=>{
        console.log('I want to show product list')
        
        
    }

  console.log(product_card);
  const itemList = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.img} alt="" />
      </div>
      <div className="card_header">
        <h2 style={{fontWeight:'lighter'}}>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">
         <Link to="/menu"  onClick={(e)=>click()}>Add to Cart</Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="headphone">
      <h3>Headphones</h3>
      </div>
      <div className="main">
        
        {itemList}
      </div>
    </>
  );
};

export default productlist;
