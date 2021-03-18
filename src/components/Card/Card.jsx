import React from "react";
import "./card.css";

const Card = ({ name, img, category, cost }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <img src="" alt=""/>
      <div className="card-category">{category}</div>
      <div className="card-name">{name}</div>
    </div>
  );
};

export default Card;
