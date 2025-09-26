import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "./SignUp";
import VerifyEmail from "./VerifyEmail";
import Login from "./Login";

const Auth = ({ user, setUser }) => {
  const [step, setStep] = useState("signup");

  return (
    <Container>
      {step === "signup" && (
        <SignUp
          user={user}
          setUser={setUser}
          goToVerify={() => setStep("verify")}
          goToLogin={() => setStep("login")}
        />
      )}

      {step === "login" && (
        <Login setUser={setUser} goToSignup={() => setStep("signup")} />
      )}

      {step === "verify" && (
        <VerifyEmail user={user} goBackToLogin={() => setStep("login")} />
      )}
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
