import styled from "styled-components";

export const BreakHeader = styled.header`
  width: 94%;
  height: 100%;
  background-color: #fd9f28;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_left {
    width: 30%;
    height: 100%;
    font-family: roboto, sans-serif;
    display: flex;
    align-items: center;
    h1 {
      color: #297e2a;
      font-size: 1.7rem;
    }
  }
  .header_right {
    width: 16%;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    position: relative;
    .cart_icon {
      height: 50%;
      .cart {
        font-size: 3rem;
        cursor: pointer;
      }
      span {
        position: absolute;
        font-size: 1.2rem;
        top: 9%;
        left: 16%;
        padding: 0 0.3rem;
        border-radius: 50px;
        background-color: red;
        color: white;
      }
    }
    .login_btn {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: 1px solid #131313;
      border-radius: 0.6rem;
      cursor: pointer;
      font-family: roboto, sans-serif;
      .user_icon {
        font-size: 2rem;
      }
    }
  }
`;
