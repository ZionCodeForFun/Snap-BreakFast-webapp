import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  height: max-content;
  display: flex;
  justify-content: center;
  font-family: roboto, sans-serif;
  color: #131313;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: max-content;
    align-items: center;
    margin-left: 3rem;

    .available_cities {
      width: 100%;
      height: 50%;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 3rem;
      gap: 1.5rem;

      h2 {
        font-size: 1.8rem;
        font-weight: bold;
      }

      .cities {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;

        p {
          font-weight: 500;
          color: #2c2c2c;
        }
      }

      h1 {
        height: auto;
        margin-top: 2rem;
        text-align: center;
      }
    }

    .what_we_do_holder {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      gap: 2rem;

      .content_holder {
        width: 32%;
        background-color: white;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        text-align: center;

        .img_holder {
          width: 100%;
          height: 60vh;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid black;
            object-fit: cover;
          }
        }

        p {
          width: 75%;
          line-height: 1.5rem;
        }

        h2 {
          font-size: 1.7rem;
        }
      }
    }

    .JoinUs_partner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;

      .just_h1 {
        height: 20vh;
        display: flex;
        align-items: end;

        h1 {
          font-weight: bold;
          color: #cccc;
          font-size: 2.2rem;

          i {
            font-size: 1.7rem;
          }
        }
      }

      .content_holder {
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: space-between;
        align-items: start;

        .left_content {
          width: 47%;
          height: 60%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          h2 {
            font-size: 1.7rem;
          }

          .partner_btn {
            padding: 0.8rem 1rem;
            background-color: #297e2a;
            width: max-content;
            border: none;
            border-radius: 0.5rem;
          
            font-size: 1rem;
            color: white;
            cursor: pointer;
            transition: all 350ms ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          }

          p {
            width: 97%;
            line-height: 1.7rem;
          }
        }

        .right_content {
          width: 47%;
          height: 100%;

          img {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .content_holder2 {
      width: 100%;
      height: 50vh;
      display: flex;
      justify-content: space-between;
      align-items: start;
      flex-direction: row-reverse;

      .left_content {
        width: 47%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2 {
          font-size: 1.7rem;
        }

        .partner_btn {
          padding: 0.8rem 1rem;
          background-color: #297e2a;
          width: max-content;
          border: none;
          border-radius: 0.5rem;
         
          font-size: 1rem;
          color: white;
          cursor: pointer;
          transition: all 350ms ease-in-out;

          &:hover {
            transform: scale(1.1);
          }
        }

        p {
          width: 97%;
          line-height: 1.7rem;
        }
      }

      .right_content {
        width: 47%;
        height: 100%;

        img {
          border-radius: 1rem;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    @media (max-width: 900px) {
      margin-left: 0;

      .what_we_do_holder,
      .JoinUs_partner .content_holder,
      .content_holder2 {
        flex-direction: column;
        height: auto;
        gap: 2rem;

        .left_content,
        .right_content,
        .content_holder {
          width: 100%;
          height: auto;
        }

        img {
          height: auto;
        }
      }

      .available_cities h2 {
        font-size: 1.4rem;
      }

      .JoinUs_partner .just_h1 h1 {
        font-size: 1.6rem;
      }
    }

    @media (max-width: 600px) {
      .what_we_do_holder .content_holder h2,
      .JoinUs_partner .left_content h2,
      .content_holder2 .left_content h2 {
        font-size: 1.3rem;
      }

      .what_we_do_holder .content_holder p,
      .JoinUs_partner .left_content p,
      .content_holder2 .left_content p {
        font-size: 0.9rem;
      }
    }
  }
`;
