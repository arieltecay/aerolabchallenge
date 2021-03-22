import AddMoreCoins from "../AddCoins/AddCoins";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./addCoinsModal.css";

const AddCoins = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <>
      {show && (
        <div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
          >
            <ModalHeader className="modal-header">Add More  Coins </ModalHeader>
            <div className="add-more-coins-modal">
              <AddMoreCoins />
            </div>
          </Modal>
        </div>
      )}
    </>
  ) : null;
};

export default AddCoins;
