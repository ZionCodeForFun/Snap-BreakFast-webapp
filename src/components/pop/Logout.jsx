import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logout = ({ onClose, setUser }) => {
  const nav = useNavigate()
  const handleLogout = () => {
     setUser(null);
    onClose();
 nav("/")
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
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 9999;
`;

const Holder = styled.div`
  width: 350px;
  max-width: 90vw;
  height: 320px;
  max-height: 80vh;
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
    font-size: 1.1rem;
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
  @media (max-width: 768px) {
    width: 90vw;
    height: 260px;
    border-radius: 18px;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    width: 98vw;
    height: 220px;
    border-radius: 12px;
    padding: 0.5rem;
    p {
      font-size: 0.95rem;
    }
    .first,
    .second {
      font-size: 0.95rem;
      padding: 0.5rem 0;
    }
  }
`;
