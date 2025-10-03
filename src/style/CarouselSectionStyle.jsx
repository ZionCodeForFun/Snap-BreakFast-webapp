import styled from "styled-components";
import hero from "../assets/hero.png";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

  margin-top: 5rem;
  padding-bottom: 3rem;

  .wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    .left_holder {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 3rem;

      h1 {
        font-size: 2.9rem;
        color: #131313;
        font-weight: 600;
      }

      .address_input {
        display: flex;
        width: 100%;
        height: 3rem;
        align-items: center;
        background-color: white;
        justify-content: space-around;
        border-radius: 0.5rem;
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        .location_input {
          display: flex;
          align-items: center;
        }

        input {
          height: 100%;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          outline: none;
          cursor: pointer;
        }

        .live_location_icon {
          display: flex;
          color: #40b340;
          align-items: center;
          background-color: #e9f8e9;
          padding: 0.1rem 0.4rem;
          border-radius: 2rem;
          font-weight: 100;
          cursor: pointer;
        }
      }

      i {
        font-size: 1.6rem;
      }

      p {
        width: 100%;
        line-height: 1.5rem;
      }
    }

    .right_holder {
      width: 40%;
      height: 84%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 3px solid white;
      }
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    height: 60vh;
    margin-top: 3rem;

    .wrapper {
      width: 95%;

      .left_holder {
        width: 55%;

        h1 {
          font-size: 2rem;
        }

        .address_input {
          height: 2.5rem;

          input {
            font-size: 0.9rem;
          }
        }

        p {
          width: 90%;
          font-size: 0.95rem;
        }
      }

      .right_holder {
        width: 35%;
      }
    }
  }

  @media (max-width: 480px) {
    height: 100vh;
    margin-top: 4.7rem;

    .wrapper {
      flex-direction: column;
      align-items: center;

      .left_holder {
        width: 100%;
        gap: 1rem;

        h1 {
          font-size: 1.2rem;
          text-align: center;
        }

        .address_input {
          height: 2rem;

          @media screen and (max-width: 768px) {
              width: 100%;
              height: 5rem;
            
              
          input {
            font-size: 0.8rem;

              
            }
          }
        }

        p {
          width: 100%;
          font-size: 0.85rem;
          text-align: center;
          @media screen and (max-width: 768px) {
            margin-top: 2.4rem;
          }
        }
      }

      .right_holder {
        width: 80%;
        margin-top: 1rem;
        @media screen and (max-width: 768px) {
          height: 50vh;
          img {
            height: 34vh;
            margin-bottom: 5rem;
            width: 5vw;
          }
        }

        img {
          width: 100%;
        }
      }
    }
  }
`;
