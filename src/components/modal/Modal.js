import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import loading from "../../assets/images/loading-plongaye.svg";
import { PAYER_MONCASH } from "../../constants/constants";
import usePayment from "../../hooks/post/usePayment";

export default function ModalForm({
  show,
  handleClose,
  setThnxID,
  handleShow,
  handlePendingShow,
}) {
  //* To re-render only the modal when user type
  const [inputModal, setInputModal] = useState("");
  const paymentMutation = usePayment();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[1].value) {
      setThnxID(inputModal);
      _handlePaymentMutation();
    }
  };

  // Appel au serveur
  const _handlePaymentMutation = (email, password) => {
    let dataInfo = {
      type_payment: PAYER_MONCASH,
      txId: inputModal,
    };

    paymentMutation.mutate(dataInfo, {
      onSuccess: (data) => {
        if (data.error) {
          console.log("Erro payment: ", data?.data);
        } else {
          console.log("Success: ", data?.data);
          handleClose();
          handlePendingShow();
        }
      },
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Valide tranzaksyon an</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                // padding: "10px ",
                margin: "10px 0",
                backgroundColor: "#BEE3F8",
              }}
            >
              <p style={{ padding: "15px" }}>
                <span style={{ fontWeight: "600" }}>SEND(750HTG) TO:</span>
                (+509)47243086/(+509)44425688
              </p>
            </div>

            <Form.Group className="mb-3" controlId="thnxId">
              <Form.Label>
                Pou'w sipòtem, wap bezwen antre kòd tranzaksyon MonCash la(TxId
                an ),si se Transfe Mande Ajan kod transaksyon an.
              </Form.Label>
              <Form.Control
                type="text"
                className="mt-2"
                placeholder="1234"
                onChange={(userInput) => setInputModal(userInput.target.value)}
                autoFocus
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {paymentMutation.status !== "loading" ? (
              <>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </>
            ) : (
              <div
                // style={{ width: "100%" }}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  src={loading}
                  alt="loading"
                  style={{ width: 100, height: 100 }}
                />
              </div>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
