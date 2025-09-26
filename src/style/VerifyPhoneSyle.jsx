import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;

  .wrapper {
    width: 30%;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #131313;

    .otp_inputs {
      display: flex;
      gap: 1rem;

      input {
        width: 3rem;
        height: 3rem;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;

        &:focus {
          border-color: #297e2a;
          outline: none;
        }
      }
    }

    .verify_btn {
      padding: 0.7rem 0;
      border: none;
      width: 80%;
      border-radius: 0.5rem;
      background-color: #297e2a;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
    }

    .goBack {
      margin-top: 0.5rem;
     color: #292828;
      cursor: pointer;
      font-size: 0.9rem;
      span{
        font-weight: bold;
      }
    }
    .close_btn {
      font-size: 3rem;
      padding: 0.5rem;
      border: none;
      background: none;
      position: absolute;
      top: 4%;
      right: 8%;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
    }
  }
`;
