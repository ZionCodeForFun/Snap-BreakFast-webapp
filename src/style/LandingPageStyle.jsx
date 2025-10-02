import styled from "styled-components";
import footerbg from "../assets/footer.png";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) and (min-width: 600px) {
    padding: 0 1rem;
  }
  @media (max-width: 768px) and (min-width: 480px) {
    padding: 0 0.5rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.2rem;
  }
`;

export const Main_holder = styled.main`
  width: 100%;
  min-height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) and (min-width: 600px) {
    padding: 1rem 0;
  }
  @media (max-width: 768px) and (min-width: 480px) {
    padding: 0.5rem 0;
  }
  @media (max-width: 480px) {
    padding: 0.2rem 0;
  }
`;
