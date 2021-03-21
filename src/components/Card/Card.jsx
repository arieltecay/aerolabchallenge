import React, { useContext } from "react";
import "./card.css";
import iconBuyBlue from "../../assets/icons/buy-blue.svg";
import iconBuyWhite from "../../assets/icons/coin.svg";
import { userContext } from "../../App";

const Card = ({ name, img, category, cost }) => {
  const { userPoints } = useContext(userContext);
  // console.log("Desde Card", userPoints);

  return (
    <div className="card-container">
      <div className="card-container-points">
        {cost > userPoints ? (
          <div className="card-points-up">
            <div>You need: {Math.abs(userPoints - cost)}</div>
            <img src={iconBuyWhite} alt="icon" />
          </div>
        ) : (
          <div>
            <img src={iconBuyBlue} alt="icon" />
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
