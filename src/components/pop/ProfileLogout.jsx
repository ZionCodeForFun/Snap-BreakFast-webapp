import React, { useState } from "react";
import styled from "styled-components";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const ProfileLogout = ({ onClose, orders = [], onLogout, userLocation }) => {
  const [showOrders, setShowOrders] = useState(false);
  return (
    <Container>
      <div className="top" onClick={() => setShowOrders((v) => !v)}>
        <p>My order</p>
        <span>{orders.length}</span>
      </div>
      <div className="bottom" onClick={onLogout}>
        <p>Logout</p>
        <TbLogout2 />
      </div>
      {showOrders && (
        <OrderContainer>
      <div style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #eee" }}>
        <strong>Current Location:</strong> {userLocation || "Not set"}
      </div>
          <header className="header">
            <div className="close-holder">
              {" "}
              <IoClose className="close_btn" onClick={onClose} /> Close
            </div>
            <h3>Orders</h3>
          </header>
          {orders.length === 0 ? (
            <p>No orders</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-item">
                <p>
                  <strong>ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {order.address || userLocation || "Not set"}
                </p>
                <p>
                  <strong>ETA:{order.eta}</strong> 
                </p>
                <p>
                  <strong>Contact:{order.contact}</strong> 
                </p>
                <p>
                  <strong>Items:</strong>
                </p>
                <ul style={{ marginLeft: "1rem" }}>
                  {order.items?.map((item, idx) => (
                    <li key={idx}>
                      {item.name} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Total:</strong> ₦{order.total}
                </p>
              </div>
            ))
          )}
        </OrderContainer>
      )}
    </Container>
  );
};

export default ProfileLogout;

const OrderContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  min-width: 450px;
  min-height: 100vh;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  z-index: 99999;
  @media screen and (max-width:768px) {
    min-width: 13vw;
    height: 70vh;
    left: 0;

  }
  .header {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #f0f0f0;
    margin-top: 2rem;
    .close-holder {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      margin-bottom: 0.5rem;
      .close_btn {
        font-size: 2rem;
        cursor: pointer;
      }
    }
    h3 {
      color: green;
      margin-bottom: 1rem;
    }
  }
  .order-item {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
  }
`;
const Container = styled.div`
  width: 17%;
  height: 20vh;
  background-color: white;
  border-radius: 0.8rem;
  z-index: 9999;
  position: fixed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding-top: 2rem;
  right: 7%;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid green;
  @media screen and (max-width:768px) {
    width: 50%;
    position: fixed;
    right:0;
  }
  .top {
    display: flex;
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    gap: 4rem;
    &:hover {
      background-color: #cccc;
    }
    span {
      background-color: red;
      color: white;
      border-radius: 50%;
      height: max-content;
      width: max-content;
      padding: 0 0.3rem;
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: space-around;
    gap: 4rem;

    color: red;
    cursor: pointer;
  }
`;
