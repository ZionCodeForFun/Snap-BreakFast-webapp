import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  .wrapper {
    width: 30%;
    min-width: 320px;
    max-width: 450px;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    background-color: #fff;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #131313;

    .otp_inputs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1rem 0;

      input {
        width: 3rem;
        height: 3.5rem;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #297e2a;
          outline: none;
        }
      }
    }

    .verify_btn {
      padding: 0.8rem 0;
      border: none;
      width: 80%;
      border-radius: 0.5rem;
      background-color: #297e2a;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background 0.3s ease;

      &:hover {
        background-color: #1f5d21;
      }
    }

    .goBack {
      margin-top: 0.8rem;
      color: #292828;
      cursor: pointer;
      font-size: 0.95rem;
      span {
        font-weight: bold;
        color: #297e2a;
      }
    }

    .close_btn {
      font-size: 2rem;
      padding: 0.3rem;
      border: none;
      background: none;
      position: absolute;
      top: 4%;
      right: 6%;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid #131313;
      transition: background 0.3s ease;

      &:hover {
        background-color: #eee3d5;
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      width: 80%;
      padding: 2rem 1.5rem;
    }

    .otp_inputs input {
      width: 2.5rem;
      height: 3rem;
      font-size: 1.2rem;
    }
  }
`;
