import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { LuCheck } from "react-icons/lu";

const OrderSuccess = ({ onClose, orders }) => {
  const order = orders && orders.length > 0 ? orders[0] : null;
  return (
    <Container>
      <Holder>
        <Icon1>
          <div onClick={onClose} style={{ cursor: "pointer" }}>
            <IoIosClose style={{ fontSize: 32 }} />
          </div>
        </Icon1>
        <Success>
          <div className="icon2">
            <LuCheck />
          </div>
        </Success>
        <Bigtext>
          <h2>Order Complete!</h2>
        </Bigtext>
        <Note>
          {order ? (
            <>
              <p>
                Thank you for choosing SnapBreakfast. Your order #{order.id} has
                been
                <br />
                placed successfully.
              </p>
              <p>Delivery Address: {order.address}</p>
              <p>Estimated Delivery: {order.eta || "45 - 55 mins"}</p>
              <p>
                You’ll receive a notification once your breakfast is on the way.
              </p>
              <p>
                Track your order via this contact{" "}
                {order.contact || "07000000101"}
              </p>
            </>
          ) : (
            <p>No order details found.</p>
          )}
        </Note>
        <Btnholder>
          <button onClick={onClose}>Back to home</button>
        </Btnholder>
      </Holder>
    </Container>
  );
};

export default OrderSuccess;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Holder = styled.div`
  width: 40%;
  height: 400px;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  cursor: pointer;
`;

const Icon1 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
    margin-right: 10px;
    font-weight: 600;
    border-radius: 50px;
    border: 1px solid #00000010;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #000;
    background-color: #ffffff66;
  }
`;

const Success = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  .icon2 {
    width: 40px;
    height: 40px;
    font-size: 30px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
    color: #fff;
  }
`;

const Bigtext = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  line-height: 110%;
`;

const Note = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    margin: 2px 0;
  }
  br {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Btnholder = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 200px;
    height: 50px;
    background: #008000;
    border-radius: 15px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      background: #006c00;
    }
  }
`;
