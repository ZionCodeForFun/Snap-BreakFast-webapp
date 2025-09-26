import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .wrapper {
    position: relative;
    width: 30%;
    height: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 1rem;
    padding: 3rem 0;
    color: #131313;
    .signin_text {
      align-self: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
    label {
      width: 80%;
      align-self: center;
      padding: 1rem 0;
      font-size: 1.2rem;
    }

    input {
      width: 80%;
      align-self: center;
      padding: 0.7rem 0;
      border-radius: 0.4rem;
      outline: none;
      border: none;
      padding-left: 1rem;
      font-style: italic;
      background-color: #f2f6f5;
    }
  }

  
  .next_btn {
    width: 80%;
    align-self: center;
    padding: 0.7rem 0;
    border-radius: 0.4rem;
    margin-top: 2rem;
    border: none;
    background-color: #297e2a;
    color: white;
    cursor: pointer;
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

  h3 {
    align-self: center;
    font-weight: 600;
    font-size: 1rem;

    span {
      color: #297e2a;
      font-size: larger;
      cursor: pointer;
    }
  }
`;
