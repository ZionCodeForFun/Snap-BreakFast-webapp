import styled from "styled-components";
import food7 from "../assets/food7.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  color: #131313;

  .wrapper {
    width: 86%;
    display: flex;
    flex-direction: column;

    h5 {
      color: #979696cc;
    }

    .title_holder {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 2rem;
      margin-top: 0.9rem;
      width: 100%;
      min-height: 55vh;
      border-radius: 1.2rem;

      background: linear-gradient(rgba(19, 19, 19, 0.6)), url(${food7});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.4rem;

        h1 {
          color: white;
          font-size: 2.4rem;
        }
        h6 {
          color: white;
          width: 60%;
          font-size: 1rem;
          font-weight: 300;
        }
      }

      p {
        background-color: white;
        width: max-content;
        padding: 0.3rem 0.8rem;
        border-radius: 0.6rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        color: #5c5959cc;
        gap: 0.4rem;

        i {
          font-size: 1.4rem;
          color: black;
        }
      }
    }

    h3 {
      padding: 2rem 0;
      font-size: 2.3rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 550;

      span {
        font-size: 1.6rem;
        font-weight: 100;
      }
    }

    .open_time {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      h6 {
        font-size: 1.1rem;
        font-weight: 100;
      }
      p {
        font-size: 1.1rem;
        color: #979696cc;
      }
    }

    .Card_holder {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;

      .card {
        flex: 1 1 calc(33% - 2rem);
        min-width: 280px;
        height: auto;
        background-color: #f1f1f1cc;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;

        .image {
          width: 100%;
          height: 220px;
          img {
            border-radius: 1rem 1rem 0 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .content {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          h1 {
            font-size: 1.4rem;
            font-weight: 600;
            text-align: center;
          }
          h4 {
            margin: 0.8rem 0 1rem 0;
          }

          button {
            width: max-content;
            padding: 0.7rem 2rem;
            border-radius: 0.5rem;
            border: none;
            font-size: 1rem;
            color: white;
            background-color: #297e2a;
            &:hover {
              background-color: #175018;
              cursor: pointer;
            }
          }
        }
      }
    }

    .min {
      font-size: 1.1rem;
      color: #979696cc;
      justify-content: flex-end;
      display: flex;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 900px) {
    .wrapper {
      .title_holder .title h6 {
        width: 80%;
      }
      .Card_holder .card {
        flex: 1 1 calc(48% - 1rem);
      }
    }
  }

  @media (max-width: 600px) {
    .wrapper {
      .title_holder {
        min-height: 40vh;
        .title h6 {
          width: 100%;
          font-size: 0.9rem;
        }
      }
      .Card_holder {
        flex-direction: column;
        .card {
          width: 100%;
        }
      }
    }
  }
`;
