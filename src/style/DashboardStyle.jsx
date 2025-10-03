import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 120vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  color: #131313;

  .wrapper {
    width: 87%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
      font-size: 2rem;
    }

    .restaurant_icon {
      display: flex;
      flex-direction: column;
      height: 18vh;
      width: 11%;
      background-color: #297e2a;
      color: #dad6d6;
      align-items: center;
      justify-content: center;
      border-radius: 0 0.5rem 0.5rem 0;
      margin-bottom: 3rem;

      i {
        font-size: 4rem;
      }
    }

    .card_holder {
      width: 100%;
      min-height: 50vh;
      display: flex;
      gap: 2rem;

      .card {
        width: 32%;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        height: 100%;

        .image {
          width: 100%;
          height: 40%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.5rem;
            transition: all 350ms ease-in-out;
            &:hover {
              transform: scale(1.08);
            }
          }
        }

        .restaurantName {
          display: flex;
          width: 100%;
          justify-content: space-between;
          h6 {
            font-size: 0.9rem;
          }
        }

        .bike {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
      }
    }
  }

  @media (max-width: 900px) {
    min-height: 100vh;
    .wrapper {
      .card_holder {
        flex-wrap: wrap;
        .card {
          width: 48%;
        }
      }
    }
  }

  @media (max-width: 600px) {
    min-height: auto;
    .wrapper {
      .card_holder {
        flex-direction: column;
        .card {
          width: 100%;
        }
      }
    }
  }
`;
