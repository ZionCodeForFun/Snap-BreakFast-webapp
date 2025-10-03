import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const ServiceContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ServiceContent = styled.div`
  width: 37%;
  height: 74vh;
  position: fixed;
  top: 20%;
  left: 26%;
  background-color: #ffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width:768px) {
    width: 100%;
    position: fixed;
    left: 1%;
    top: 26%;
  }
`;

export const Buttonholder = styled.div`
  width: 90%;
  height: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;
  margin-bottom: -1rem;

  .closebtn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    background-color: #ffffff66;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #00000010;
    border-color: #000;
  }
`;

export const ServicetextContent = styled.div`
  width: 87%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .locationbtn {
    width: 100%;
    height: 3rem;
    border-radius: 7px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    color: white;
    background-color: #297e2a;
    cursor: pointer;
    &:hover {
      background-color: #0f4e0f;
    }
    margin-bottom: -0.5rem;
  }
`;

export const Servicetext = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .delivertext {
    height: 10%;
    width: 100%;
    display: flex;
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: -1rem;
    justify-content: center;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #d5d8d7;
  font-size: 23px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 8px;
  padding-left: 47px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #f0f0f0e6;
`;
