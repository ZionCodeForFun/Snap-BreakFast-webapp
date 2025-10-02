import styled from "styled-components";

export const Container = styled.div`
  min-width: 35%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  right: 0%;
  top: 0%;
  position: fixed;

  z-index: 9999;
  color: #131313;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  .wrapper {
    display: flex;
    width: 90%;
    height: 90%;
    flex-direction: column;
    justify-content: center;

    .header {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1.8rem;
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
    }

    .carousel_holder {
      width: 90%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;

      i {
        font-size: 1.6rem;
        cursor: pointer;
      }

      .carousel_img {
        width: 48%;
        height: 90%;

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          border: 1px solid black;
        }
      }
    }

    .display_imgs {
      display: flex;
      width: 100%;
      height: 17%;
      margin-top: 2rem;
      gap: 1rem;

      img {
        width: 20%;
        height: 100%;
        border: 1px solid black;
        object-fit: cover;
      }
    }

    .details_text {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      justify-content: space-between;

      h1 {
        font-size: 1.3rem;
      }
    }

    .footer_btn {
      width: 100%;
      height: 20%;
      display: flex;
      margin-top: 1.2rem;
      align-items: center;

      .increase_btn {
        display: flex;
        font-size: 1rem;
        padding: 0.1rem;
        width: max-content;
        border: 2px solid #c2c0c0;
        align-items: center;
        gap: 0.4rem;
        height: 2.6rem;
        border-radius: 0.4rem;

        .minus,
        .plus {
          padding: 0 0.4rem;
          border: none;
          background: none;
          cursor: pointer;
        }
      }

      .cart_btn {
        width: 70%;
        margin-left: 1.4rem;
        border-radius: 0.6rem;
        border: none;
        background-color: #086008;
        color: white;
        font-weight: bold;
        padding: 1.2rem 0;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        &:hover {
          transform: scale(1.1);
          background-color: #0cac0c;
        }
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 90%;
    right: 5%;
    top: 5%;
    height: 95vh;

    .wrapper {
      .carousel_holder {
        flex-direction: column;
        height: auto;

        .carousel_img {
          width: 80%;
          height: auto;
        }
      }

      .display_imgs {
        overflow-x: auto;
        height: auto;

        img {
          width: 25%;
          height: auto;
        }
      }

      .footer_btn {
        flex-direction: column;
        gap: 1rem;
        height: auto;

        .increase_btn {
          width: 100%;
          justify-content: center;
        }

        .cart_btn {
          width: 100%;
          margin-left: 0;
          padding: 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
