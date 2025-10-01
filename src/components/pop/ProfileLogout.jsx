import React from "react";
import styled from "styled-components";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const ProfileLogout = ({ onClose, onOrderClick, onLogout }) => {
  return (
    <Container>
      <div
        className="close_icon"
        onClick={onClose}
        style={{ position: "absolute", top: 8, right: 8, cursor: "pointer" }}
      >
        <AiOutlineClose size={22} />
      </div>
      <div className="top" onClick={onOrderClick}>
        <p>My order</p>
        <span>o</span>
      </div>
      <div className="bottom" onClick={onLogout}>
        <p>Logout</p>
        <TbLogout2 />
      </div>
    </Container>
  );
};

export default ProfileLogout;
const Container = styled.div`
  width: 17%;
  height: 20vh;
  background-color: white;
  border-radius: 0.8rem;
  z-index: 8;
  position: fixed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding-top: 2rem;
  right: 4%;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid green;
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
