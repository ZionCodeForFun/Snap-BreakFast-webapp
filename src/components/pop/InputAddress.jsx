import React from "react";
import styled from "styled-components"; 
const InputAddress = () => {
  return (
    <DeliverysessionContent>
      <SearchContainer>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <SearchInput type="text" placeholder="Search for Restuarant" />
      </SearchContainer>
    </DeliverysessionContent>
  );
};

export default InputAddress;




import { IoSearchOutline } from "react-icons/io5";

export const DeliverysessionContent = styled.div`
  width: 70%;

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  top: 2%;
  right: 5%; 
  pointer-events: none;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 30%;
`;
export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #d5d8d7;
  font-size: 23px;
  background-color: green;
  width: 48px;
  height: 50px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
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
  margin-left: 1.5rem;
  color: #8c8787b7;
`;