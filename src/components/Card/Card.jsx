import React, { useContext } from "react";
import "./card.css";
import iconBuyBlue from "../../assets/icons/buy-blue.svg";
import iconBuyWhite from "../../assets/icons/coin.svg";

const Card = ({ name, img, category, cost }) => {

  return (
    <div className="card-container">
      <div className="card-container-points">
        {cost > 2000 ? (
          <div className="card-points-up">
            <div>You need: {Math.abs(2000 - cost)}</div>
            <img src={iconBuyWhite} alt="" />
          </div>
        ) : (
          <div>
            <img src={iconBuyBlue} alt="" />
          </div>
        )}
      </div>
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <img src="" alt="" />
      <div className="card-category">{category}</div>
      <div className="card-name">{name}</div>
      <div className="card-points">{cost} Points</div>
    </div>
  );
};

export default Card;