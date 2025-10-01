import styled from "styled-components";
export const CartBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  min-width: 40%;
  height: 100vh;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  border-radius: 10px 0 0 10px;
  z-index: 10000;
  padding: 2rem 2.5rem;
  color: #131313;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.2s ease-in;

  .cart_holder {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 2px solid #cccc;
    padding-bottom: 2rem;

    h2 {
      display: flex;
      align-items: center;
      font-size: 2rem;
      color: #131313;
      .cart {
        font-size: 2.2rem;
      }
    }

  }

  .cart_content {
    display: flex;
    height: 9rem;
    width: 100%;

    .item_img {
      width: 35%;
      height: 100%;
      margin-right: 1.5rem;

      img {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
      }
    }

    .food-name {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-top: 1.3rem;
      gap: 1rem;

      h4 {
        color: #3f3e3e;
        font-size: 1rem;
      }

      .increase_btn {
        display: flex;
        font-size: 1rem;
        padding: 0.1rem;
        width: max-content;
        border: 2px solid #c2c0c0;
        align-items: center;
        gap: 0.4rem;
        border-radius: 0.4rem;

        .minus,
        .plus {
          padding: 0.2rem 0.4rem;
          border: none;
          background: none;
          cursor: pointer;
        }
      }
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 30%;
      padding-right: 1.5rem;
      padding-top: 1.4rem;
      gap: 1.3rem;

      .trash {
        font-size: 1.5rem;
        cursor: pointer;
      }

      h4 {
        font-size: 1.1rem;
        margin-right: 1.1rem;
      }
    }
  }

  .close-btn {
    font-size: 2.4rem;
    padding: 0.3rem;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #131313;

    &:hover {
      background-color: #eee3d5;
    }
  }

  .cart-footer {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    border-top: 2px solid #cccc;
    padding-top: 1rem;
    width: 90%;
    bottom: 1rem;

    .total {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    button {
      cursor: pointer;
      width: 100%;
      padding: 0.7rem 0;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      border: none;
      background-color: #297e2a;
      border-radius: 0.5rem;

      &:hover {
        background-color: #1c4e1d;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    min-width: 60%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    border-radius: 0;
    padding: 1rem;

    .cart-header h2 {
      font-size: 1.5rem;
    }

    .cart_content {
      flex-direction: column;
      height: auto;
      gap: 1rem;

      .item_img {
        width: 100%;
        height: 10rem;
      }

      .food-name {
        width: 100%;
      }

      .price {
        width: 100%;
        align-items: flex-start;
      }
    }
  }
`;
