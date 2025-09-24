import React from "react";
import styled from "styled-components";
import SignUp from "./SignUp";
const Auth = () => {
  return (
    <Container>
      <SignUp />
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
`;
