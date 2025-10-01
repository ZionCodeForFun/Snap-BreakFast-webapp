import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logout = ({ onClose }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    if (typeof onClose === "function") onClose();
  };
  return (
    <Container>
      <Holder>
        <p>Are you sure you want to log out?</p>
        <button className="first" onClick={handleLogout}>
          Log out
        </button>
        <button className="second" onClick={onClose}>
          Cancel
        </button>
      </Holder>
    </Container>
  );
};

export default Logout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
`;

const Holder = styled.div`
  width: 16%;
  height: 38%;
  background: #fff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  font-weight: bold;
  p {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
  .first {
    padding: 0.7rem 0;
    border-radius: 0.5rem;
    border: none;
    margin-bottom: 0.5rem;
    background-color: red;
    color: #fff;
    transition: all 350ms ease-in-out;
    width: 80%;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: darkred;
    }
  }
  .second {
    padding: 0.7rem 0;
    border-radius: 0.5rem;
    border: none;
    transition: all 350ms ease-in-out;
    width: 80%;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: #cccc;
    }
  }
`;
