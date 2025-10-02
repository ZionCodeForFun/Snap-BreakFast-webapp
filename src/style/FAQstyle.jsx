import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  min-height: 100vh;
  overflow-x: hidden;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #131313;

  .wrapper {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: #ffc244;
    align-items: center;
    padding: 2rem 0;

    .about_faq {
      width: 90%;
      margin-bottom: 2rem;
      h1 {
        font-size: 1.7rem;
      }
    }

    .faq_holder {
      width: 90%;
      display: flex;
      justify-content: space-between;
      gap: 2.7rem;

      .faq_box {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        .FAQS {
          width: 100%;
          min-height: 3rem;
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 0.5rem 0.5rem 0 0;
          padding: 0.5rem 0.7rem;

          h6 {
            font-size: 1rem;
          }
          i {
            font-size: 1.2rem;
            cursor: pointer;
            color: green;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .wrapper {
      .about_faq h1 {
        font-size: 1.3rem;
      }
      .faq_holder {
        flex-direction: column;
        .faq_box {
          width: 100%;
          gap: 0.8rem;
          .FAQS {
            min-height: 2.5rem;
            h6 {
              font-size: 0.9rem;
            }
            i {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      .about_faq h1 {
        font-size: 1.1rem;
      }
      .faq_holder {
        flex-direction: column;
        gap: 1rem;
        .faq_box .FAQS {
          min-height: 2rem;
          h6 {
            font-size: 0.85rem;
          }
          i {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      padding: 1rem 0;
      .about_faq h1 {
        font-size: 1rem;
      }
      .faq_holder {
        gap: 0.6rem;
        .faq_box .FAQS {
          min-height: 1.8rem;
          h6 {
            font-size: 0.75rem;
          }
          i {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;
