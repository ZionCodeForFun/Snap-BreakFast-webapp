import React, { useState } from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import kora from "../../assets/kora.jpeg";

const Network = ({ onClose, user, totalAmount, onPaymentSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = () => {
    if (!selectedMethod) return;

    if (selectedMethod === "kora") {
      if (!window.Korapay) {
        alert("KoraPay SDK not loaded. Please refresh and try again.");
        return;
      }

      window.Korapay.initialize({
        key: import.meta.env.VITE_KORA_Public_Key,
        reference: `snapbreakfast_${Date.now()}`,
        amount: Number(totalAmount),
        currency: "NGN",
        customer: {
          name: user?.name || "Guest User",
          email: user?.email || "guest@example.com",
        },
        onSuccess: function (data) {
          console.log(" Payment Success:", data);
          alert("Payment successful!");
          if (onPaymentSuccess) onPaymentSuccess(data);
          onClose();
        },
        onFailed: function (data) {
          console.error(" Payment Failed:", data);
          alert("Payment failed. Please try again.");
        },
        onPending: function (data) {
          console.log(" Payment Pending:", data);
          alert("Your payment is being processed...");
        },
      });
    }
  };

  return (
    <Overlay>
      <Holder>
        <Close>
          <div>
            <IoIosClose onClick={onClose} size={40} />
          </div>
        </Close>

        <Textpart>
          <h3>How would you like to pay?</h3>
        </Textpart>

        <Option onClick={() => setSelectedMethod("kora")}>
          <div className="icon">
            <img src={kora} alt="KoraPay" />
          </div>
          <article>Pay with Kora</article>
          <label className="radio-container">
            <input
              type="radio"
              name="payment"
              value="kora"
              checked={selectedMethod === "kora"}
              onChange={() => setSelectedMethod("kora")}
            />
            <span className="checkmark"></span>
          </label>
        </Option>

        <Btnmethod>
          <button
            style={{
              background: selectedMethod ? "green" : "transparent",
              color: selectedMethod ? "white" : "black",
            }}
            disabled={!selectedMethod}
            onClick={handlePayment}
          >
            Proceed with {selectedMethod === "kora" && "Kora"}
          </button>

          <button className="btn" onClick={onClose}>
            Go back
          </button>
        </Btnmethod>
      </Holder>
    </Overlay>
  );
};

export default Network;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Holder = styled.div`
  width: 40%;
  background: #fff;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    border: 2px solid lightgray;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }
`;

const Textpart = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 22px;
  font-weight: 600;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;

  .icon img {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }

  article {
    font-size: 18px;
    font-weight: 500;
    flex: 1;
  }

  .radio-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .radio-container input {
    display: none;
  }

  .checkmark {
    width: 23px;
    height: 23px;
    border: 2px solid green;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }

  .radio-container input:checked + .checkmark::after {
    content: "";
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
  }
`;

const Btnmethod = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.5rem;

  button {
    width: 100%;
    padding: 15px 12px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    border: none;
  }

  .btn {
    border: none;
    color: green;
    background: transparent !important;
  }
`;
