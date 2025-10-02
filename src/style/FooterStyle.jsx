import styled from "styled-components";

export const SnapFooter = styled.footer`
  width: 100%;
  min-height: 120vh;
  font-family: roboto, sans-serif;
  display: flex;
  flex-direction: column;

  color: white;
  background: url("/your-footer-bg.jpg") no-repeat center center/cover;
  padding-left: 5rem;
  padding-top: 10rem;

  .logo {
    width: 80%;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    img {
      object-fit: contain;
    }
  }

  .footer_details {
    width: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 9.5rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 0;
      font-weight: 100;
      font-size: 0.8rem;
      li {
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .available_cities {
    width: 80%;
    display: flex;
    flex-direction: column;
    height: max-content;
    gap: 1.5rem;

    h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    .cities {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      p {
        font-weight: 100;
        font-size: 0.8rem;
      }
    }
  }

  .copyright {
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #131313;
   
    margin-top:3rem;

    h6 {
      font-size: 0.95rem;
      font-weight: 300;
    }

    .social_media {
      display: flex;
      gap: 1.8rem;
      i {
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #297e2a;
        }
      }
    }
  }

  @media (max-width: 900px) {
    min-height: 70vh;
    .footer_details {
      gap: 2rem;
      flex-wrap: wrap;
    }
    .available_cities .cities {
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 2rem;
    .footer_details {
      flex-direction: column;
      gap: 1.5rem;
    }
    .copyright {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    min-height: 55vh;
    padding: 1.5rem;
    .logo h1 {
      font-size: 1.3rem;
    }
    .footer_details h3 {
      font-size: 1rem;
    }
    .available_cities h1 {
      font-size: 1.2rem;
    }
    .copyright h6 {
      font-size: 0.75rem;
    }
    .social_media i {
      font-size: 1.2rem;
    }
  }
`;
