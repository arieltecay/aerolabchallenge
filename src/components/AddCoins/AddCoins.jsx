import { useContext, useState } from "react";
import { userContext } from "../../App";
import postCoins from "../../api/moreCoins";
import "./addCoins.css";

const AddCoins = () => {
  const [message, setMessage] = useState("");
  const { setUserPoints } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <div className="add-coins-buttons">
        <button
          onClick={() =>
            postCoins(1000)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-primary btn-1000"
          id="btn-coins"
        >
          1000
        </button>
        <button
          onClick={() =>
            postCoins(5000)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-primary "
          id="btn-coins"
        >
          5000
        </button>
        <button
          onClick={() =>
            postCoins(7500)
              .then(
                (data) => (
                  setMessage(data.message),
                  setUserPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
          className="btn btn-primary"
          id="btn-coins"
        >
          7500
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        {loading === true ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <p className="text-success">{message}</p>
        )}
      </p>
    </>
  );
};

export default AddCoins;
