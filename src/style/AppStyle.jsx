import styled from "styled-components";
import footerbg from "../assets/footer.png";

export const Header_holder = styled.header`
  width: 100%;
  background-color: #ffc244;
  height: 5rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  z-index: 3;
`;
export const Footer_holder = styled.footer`
  width: 100%;
  height: 100%;
  background: url(${footerbg}), #131313;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  clip-path: ellipse(200% 100% at 90% 100%);
`;
