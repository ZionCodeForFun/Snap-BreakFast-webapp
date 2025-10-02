import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #131313;

  .wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    .summary {
      display: flex;
      width: 100%;
      height: 5rem;
      align-items: end;
    }

    .checkout_holder {
      display: flex;
      height: 100%;
      width: 100%;
      gap: 2rem;

      .left {
        width: 75%;
        min-height: 130vh;
        display: flex;
        flex-direction: column;

        .food-details-holder {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          width: 100%;
          height: 30%;
          gap: 1rem;
          margin-top: 3rem;

          .food-details {
            width: 80%;
            height: 22%;
            display: flex;
            align-items: center;

            .btn_holder {
              display: flex;
              font-size: 1rem;
              padding: 0.1rem;
              width: max-content;
              border: 2px solid #c2c0c0;
              align-items: center;
              gap: 0.4rem;
              border-radius: 0.4rem;
              margin-right: 2rem;

              button {
                padding: 0.2rem 0.4rem;
                border: none;
                background: none;
                cursor: pointer;
              }
            }
          }

          h2 {
            font-size: 1.2rem;
            width: 30%;
            font-weight: 100;
          }
          p {
            justify-content: end;
            display: flex;
            width: 50%;
          }
        }

        .need-extra-holder {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 15rem;
          padding-top: 3rem;
          gap: 2rem;

          .need-extra {
            display: flex;
            width: 100%;
            align-items: center;

            .cutlary-icon {
              font-size: 1.8rem;
              padding-right: 1.7rem;
            }

            .text_holder {
              gap: 0.5rem;
              display: flex;
              flex-direction: column;
              width: 55%;

              h1 {
                font-size: 1.3rem;
              }
              p {
                width: 100%;
              }
            }
          }

          .toogle {
            display: flex;
            width: 20%;
            justify-content: end;
            margin-left: 3%;

            .on {
              font-size: 1.9rem;
              color: green;
              cursor: pointer;
            }
            .off {
              font-size: 1.9rem;
              cursor: pointer;
            }
          }
        }

        .checkout-footer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 30vh;

          h1 {
            font-size: 1.6rem;
          }

          .location {
            display: flex;
            align-items: center;
            height: 30vh;

            h2 {
              font-size: 1rem;
            }

            .i {
              font-size: 1.5rem;
            }
          }
        }

        .time {
          width: 84%;
          height: 9rem;
          display: flex;
          flex-direction: column;
          border: 2px solid #c2c0c0;
          border-radius: 1rem;
          padding: 1rem;

          h2 {
            font-size: 1.2rem;
          }
        }
      }

      .right {
        width: 30%;
        height: 70vh;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0 1rem;
        align-items: center;

        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          border-bottom: 2px solid #c2c0c0;
          padding: 2rem 0;

          h1 {
            font-size: 1.7rem;
          }

          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }

        .summary {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem 0;
          color: #313030;

          .total_holder,
          .delivery,
          .deliverytime,
          .totalprice {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          h4 {
            font-weight: 100;
            font-size: 1.2rem;
          }
        }

        .pay-to-order-btn {
          width: 100%;
          padding: 0.6rem 0;
          font-size: 0.9rem;
          font-weight: bold;
          border: none;
          border-radius: 0.4rem;
          background-color: #086d08;
          color: white;

          &:hover {
            background-color: #084208;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .wrapper {
      .checkout_holder {
        flex-direction: column;
        align-items: center;

        .left,
        .right {
          width: 100%;
        }

        .right {
          margin-top: 2rem;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      .summary {
        justify-content: center;
      }

      .checkout_holder {
        gap: 1rem;

        .left {
          .food-details-holder h2 {
            font-size: 1rem;
          }

          .need-extra-holder h1 {
            font-size: 1rem;
          }
        }

        .right {
          padding: 1rem;
          .header h1 {
            font-size: 1.2rem;
          }
          .summary h4 {
            font-size: 1rem;
          }
          .pay-to-order-btn {
            font-size: 0.8rem;
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;
