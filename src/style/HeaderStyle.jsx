import styled from "styled-components";

export const BreakHeader = styled.header`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_left {
    width: 50%;
    height: 100%;
    font-family: roboto, sans-serif;
    display: flex;
    align-items: center;

    img {
      width: 30%;
      height: 100%;
      object-fit: contain;
    }
  }

  .header_right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
    margin-right: 1%;
    position: relative;

    .cart_icon {
      position: relative;
      display: flex;
      align-items: center;

      .cart {
        font-size: 2.5rem;
        cursor: pointer;
      }

      span {
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 50px;
        background-color: red;
        color: white;
        font-weight: bold;
      }
    }

    .login_btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      background-color: #297e2a;
      border-radius: 1.5rem;
      padding: 0.6rem 0.8rem;
      color: white;
      cursor: pointer;
      font-family: roboto, sans-serif;

      h2 {
        font-size: 1.2rem;
        font-weight: 400;
      }

      .user_icon {
        font-size: 1.4rem;
      }

      &:hover {
        background-color: #175018;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 100%;

    .header_left img {
      width: 45%;
    }

    .header_right {
      gap: 0.6rem;

      .login_btn h2 {
        font-size: 1rem;
      }

      .cart_icon .cart {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 768px) and (min-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 0.5rem 0;

    .header_left {
      width: 100%;
      justify-content: center;

      img {
        width: 55%;
      }
    }

    .header_right {
      width: 100%;
      justify-content: center;
      margin-right: 0;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding: 0.8rem 0;

    .header_left {
      width: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 65%;
      }
    }

    .header_right {
      width: 100%;
      justify-content: center;
      margin-right: 0;
      gap: 0.8rem;
      flex-wrap: wrap;
    }

    .login_btn {
      padding: 0.4rem 0.6rem;

      h2 {
        font-size: 1rem;
      }
    }

    .cart_icon .cart {
      font-size: 1.6rem;
    }
  }
`;
