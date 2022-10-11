import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import moncash from "../assets/icons/logo-mon-cash.png";
import loading from "../assets/images/loading-plongaye.svg";
import trackListCover from "../assets/images/tracklist_plongaye.jpg";
import { userAtom } from "../atom/atom";
import ModalForm from "../components/modal/Modal";
import ModalPending from "../components/modal/ModalPending";
import { PAYER } from "../constants/constants";
import useGetPayment from "../hooks/get/useGetPayment";
import "./payment.css";
import ButtonWrapper from "./Paypal";

// This values are the props in the UI
const currency = "USD";

export default function Payment() {
  const [show, setShow] = useState(false);
  const [showPending, setShowPending] = useState(false);
  const [thnxID, setThnxID] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePendingClose = () => setShowPending(false);
  const handlePendingShow = () => setShowPending(true);

  const user = useRecoilValue(userAtom);
  console.log("dddd: ")
  const history = useHistory();
  const payment = useGetPayment();

  useEffect(() => {
    if (payment?.data?.data?.payer == PAYER) {
      history.push("/albums");
    }
  }, []);

  if (payment.isLoading) {
    return (
      <div
        // style={{ width: "100%" }}
        className="d-flex align-items-center justify-content-center"
      >
        <img
          src={loading}
          alt="loading"
          style={{ width: 100, height: "100vh" }}
        />
      </div>
    );
  }

  if (payment?.data?.data?.payer == PAYER) {
    history.push("/albums");
  }

  return (
    <div className="cool-bg">
      <div className="payment-card" id="particles-js">
        <h1>TIOBY DSB - PLON GAYE</h1>
        <div className="payement_card">
          <img src={trackListCover} alt="" />
        </div>
        <div className="moncash" onClick={handleShow}>
          <img src={moncash} alt="" />
        </div>
        <div className="paypal">
          <ButtonWrapper currency={currency} />
        </div>
      </div>

      <ModalForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        setThnxID={setThnxID}
        handlePendingShow={handlePendingShow}
      />
      <ModalPending
        show={showPending}
        handleClose={handlePendingClose}
        handleShow={handlePendingShow}
      />
    </div>
  );
}
