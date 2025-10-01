import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .wrapper {
    position: relative;
    width: 35%;
    min-width: 350px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 1rem;
    padding: 3rem 2rem;
    color: #131313;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

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
      width: 100%;
      padding: 0.8rem 0 0.4rem;
      font-size: 1rem;
    }

    input {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 0.4rem;
      outline: none;
      border: none;
      font-style: italic;
      background-color: #f2f6f5;
    }

    .next_btn {
      width: 100%;
      padding: 0.9rem 0;
      border-radius: 0.4rem;
      margin-top: 2rem;
      border: none;
      background-color: #297e2a;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
    }

    h3 {
      align-self: center;
      font-weight: 600;
      font-size: 1rem;
      margin-top: 1rem;

      span {
        color: #297e2a;
        font-size: larger;
        cursor: pointer;
      }
    }
  }

  .close_btn {
    font-size: 2rem;
    padding: 0.3rem;
    border: none;
    background: none;
    position: absolute;
    top: 2%;
    right: 5%;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #131313;
    &:hover {
      background-color: #eee3d5;
    }
  }
`;
