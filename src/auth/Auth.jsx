import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./SignUp";
import VerifyEmail from "./VerifyEmail";
import Login from "./Login";

const Auth = ({ user, setUser, setShowModal, step, setStep }) => {
  const navigate = useNavigate();

  const pendingUser = (() => {
    try {
      const p = localStorage.getItem("pendingUser");
      return p ? JSON.parse(p) : null;
    } catch (e) {
      return null;
    }
  })();

  const handleVerified = (verifiedUser) => {
    if (typeof setUser === "function") {
      setUser(verifiedUser || pendingUser);
    }
    try {
      localStorage.removeItem("pendingUser");
      localStorage.setItem(
        "currentUser",
        JSON.stringify(verifiedUser || pendingUser)
      );
    } catch (e) {}
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <Container>
      {step === "signup" && (
        <SignUp
          user={user}
          setUser={setUser}
          goToVerify={() => setStep("verify")}
          goToLogin={() => setStep("login")}
          setShowModal={setShowModal}
        />
      )}

      {step === "login" && (
        <Login
          setUser={setUser}
          goToSignup={() => setStep("signup")}
          setShowModal={setShowModal}
        />
      )}

      {step === "verify" && (
        <VerifyEmail
          user={pendingUser || user}
          onVerified={(verified) => handleVerified(verified)}
          goBackToLogin={() => setStep("login")}
          setShowModal={setShowModal}
        />
      )}
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.35);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;
