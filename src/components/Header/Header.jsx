import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import getUser from "../../api/users";
import coin from "../../assets/icons/coin.svg";
import "./header.css";
import AddCoinsModal from "../Modals/AddCoinsModal";

const Header = () => {
  const { userName, userPoints, setUserName, setUserPoints } = useContext(
    userContext
  );
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser().then(
      (data) => (setUserName(data.name), setUserPoints(data.points)),
      setLoading(false)
    );
  }, []);
  
  const toggleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container-header">
          <div
            onClick={toggleShow}
            style={{ fontWeight: 300, cursor: "pointer" }}
            className="add-more-coins-btn"
          >
            Add more coins
          </div>
          {showModal && (
            <div>
              <AddCoinsModal />
            </div>
          )}

          <div className="user-name">{userName}</div>
          <div className="user-points">
            <img src={coin} alt="not Available" />
            {userPoints}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
