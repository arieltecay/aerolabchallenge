import React, { useContext } from "react";
import "./card.css";
import iconBuyBlue from "../../assets/icons/buy-blue.svg";
import iconBuyWhite from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/userContext";

const Card = ({ name, img, category, cost }) => {
  const { userPoint } = useContext(UserContext);

  return (
    <div className="card-container">
      <div className="card-container-points">
        {cost > userPoint ? (
          <div className="card-points-up">
            <div>You need: {Math.abs(userPoint - cost)}</div>
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
