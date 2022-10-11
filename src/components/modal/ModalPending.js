import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalPending({ show, handleClose, setThnxID }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Verification... </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            style={{
              backgroundColor: "#BEE3F8",
              padding: 15,
              borderRadius: 5,
            }}
          >
            Mèsi paske'w deside sipòte'm. Nou resevwa demand ou an. Bay nou yon
            ti tan pandan n'ap valide tranzaksyon an pou ou. Sa ka pran{" "}
            <span className="text-primary">2 min maksimòm</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
