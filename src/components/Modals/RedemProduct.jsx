import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import postRedeem from "../../api/postRedeem";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { userContext } from "../../App";
import "./redemProduct.css";

const RedemProduct = (props) => {
  const data = props.product;
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { userPoints, setUserPoints } = useContext(userContext);
  const resta = userPoints - data.cost;

  return (
    <div>
      {show && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="container-reclaim-modal-product">
            <ModalHeader>Product Description</ModalHeader>
            <div>{data.id}</div>
            <div>{data.name}</div>
            <div>{data.category}</div>
            <div>{data.cost} Coins</div>
            <div>
              <img src={data.img} alt="" />{" "}
            </div>
          </div>
          <button
            className="btn btn-warning mt-3"
            type="button"
            onClick={() => {
              try {
                postRedeem(props.id)
                  .then(
                    (data) => (
                      setMessage(data.message),
                      setLoading(true),
                      userPoints < data.cost ? null : setUserPoints(resta),
                      setError(data.error)
                    )
                  )
                  .then(() => setLoading(false));
              } catch (error) {
                setError(error);
              }
            }}
          >
            Yes!
          </button>
          <div>
            {loading == true ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <p className={message ? "text-success mt-3" : "text-danger mt-3"}>
                {message ? message : error}
              </p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RedemProduct;
