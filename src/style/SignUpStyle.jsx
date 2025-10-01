import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .wrapper {
    position: relative;
    width: 100%;
    max-width: 420px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    border-radius: 1rem;
    padding: 2rem 1rem;
    color: #131313;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    input {
      width: 100%;
      padding: 0.7rem 1rem;
      border-radius: 0.4rem;
      outline: none;
      border: none;
      font-style: italic;
      background-color: #f2f6f5;
    }

    label {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }

    .signup_text {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      font-weight: 300;
      p {
        font-size: 1rem;
      }
    }

    .fullname_holder {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      .name_holder {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }

    h3 {
      align-self: center;
      font-weight: 500;
      font-size: 0.95rem;

      span {
        color: #297e2a;
        font-size: 1.05rem;
        font-weight: 600;
        cursor: pointer;
      }
    }

    .country {
      display: flex;
      align-items: center;
      background-color: #f2f6f5;
      border-radius: 0.6rem;
      padding: 0.5rem;
      position: relative;

      .icon_holder {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0 0.3rem;
      }

      input {
        flex: 1;
        font-style: normal;
        border: none;
        outline: none;
        background: transparent;
        padding-left: 0.5rem;
      }
    }

    .dropdown {
      position: absolute;
      top: calc(100% + 0.4rem);
      left: 0;
      width: 100%;
      max-height: 160px;
      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
      z-index: 10;
    }

    .dropdown_item {
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: background 0.2s ease;

      &:hover {
        background: #f2f6f5;
      }
    }

    .next_btn {
      width: 100%;
      padding: 0.9rem 0;
      border-radius: 0.5rem;
      margin-top: 1rem;
      border: none;
      background-color: #297e2a;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #175018;
      }
    }

    .close_btn {
      font-size: 1.8rem;
      padding: 0.3rem;
      border: none;
      background: none;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid #131313;
      transition: background 0.2s ease;
      &:hover {
        background-color: #eee3d5;
      }
    }
  }

  @media (max-width: 500px) {
    .wrapper {
      padding: 1.5rem;
      gap: 0.6rem;

      label {
        font-size: 0.9rem;
      }
      .signup_text p {
        font-size: 0.9rem;
      }
      .next_btn {
        font-size: 0.9rem;
      }
    }
  }
`;
