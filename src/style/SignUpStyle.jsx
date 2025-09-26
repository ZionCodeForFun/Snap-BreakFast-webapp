import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    position: relative;
    width: 30%;
    min-height: max-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 1rem;
    padding: 1rem 0;
    color: #131313;

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

    label {
      width: 80%;
      align-self: center;
      padding: 0.4rem 0;
      font-size: 1.2rem;
    }

    .signup_text {
      align-self: center;
      text-align: center;
      align-self: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: 100;
      p {
        font-size: 1.2rem;
      }
    }

    .fullname_holder {
      display: flex;
      width: 90%;
      align-self: center;

      .name_holder {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
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

    .country {
      width: 80%;
      align-self: center;
      display: flex;
      align-items: center;
      background-color: #f2f6f5;
      padding-left: 0.5rem;
      border-radius: 0.6rem;
      position: relative;

      .icon_holder {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        padding: 0 0.5rem;
      }

      input {
        flex: 1;
        font-style: normal;
        border: none;
        outline: none;
        background: transparent;
        padding-left: 0.5rem;
      }
    }

    .dropdown {
      position: absolute;
      top: 70%;
      left: 10%;
      width: 80%;
      max-height: 15vh;
      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
      z-index: 10;
    }

    .dropdown_item {
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      transition: background 0.2s ease;

      &:hover {
        background: #f2f6f5;
      }
    }

    .next_btn {
      width: 80%;
      align-self: center;
      padding: 0.7rem 0;
      border-radius: 0.4rem;
      margin-top: 1rem;
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
  }
`;
