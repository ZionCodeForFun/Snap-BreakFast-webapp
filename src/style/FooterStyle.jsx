import styled from "styled-components";

export const SnapFooter = styled.footer`
  width: 90%;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;

  .logo {
    width: 100%;
    height: 30%;
    /* background-color: blue; */
    display: flex;
    /* h1 {
      color: #297e2a;
      font-size: 1.7rem;
     
    } */
  }
  .footer_details {
    width: 100%;
    height: 30%;
    background-color: #d4d226;
  }
  .available_cities {
    width: 100%;
    height: 25%;
    background-color: #d8cccc;
  }
  .copyright {
    width: 100%;
    height: 25%;
    background-color: #ad217f;
  }
`;
