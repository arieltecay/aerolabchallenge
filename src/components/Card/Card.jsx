import { useContext, useState } from "react";
import "./card.css";
import iconBuyBlue from "../../assets/icons/buy-blue.svg";
import iconBuyWhite from "../../assets/icons/coin.svg";
import RedemProduct from "../Modals/RedemProduct";
import { userContext } from "../../App";

const Card = ({ name, img, category, cost, _id }) => {
  const { userPoints } = useContext(userContext);
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const data = { name, img, category, cost, _id };

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
      {cost > userPoints ? (
        <div className="card-not-enough">You Don't have enough points</div>
      ) : (
        <div
          className="card-button"
          onClick={() => {
            setId(_id);
            setProduct(data);
            setShowModal(!showModal);
          }}
        >
          Reclaims
        </div>
      )}
      {showModal && <RedemProduct product={product} id={id} />}
    </div>
  );
};

export default Card;
