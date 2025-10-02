import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const InputAdress = ({ user }) => {
  return (
    <div>
      <article>
        {user ? (
          <IconContainer>
          <SearchIcon />
        </IconContainer>
      ) : (
            <p></p>
        )}
      </article>
    </div>
  );
};

export default InputAdress;

export const SearchContainer = styled.div`
  position: relative;
  width: 30%;
`;

export const IconContainer = styled.div`
  position: fixed;
  top: 9.5%;
  z-index: 990;
  right: 44%;

  transform: translateY(-50%);
  color: #d5d8d7;
  font-size: 23px;
  background-color: green;
  width: 48px;
  height: 44px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  pointer-events: none;
  cursor: pointer;
`;

export const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #d5d8d7;
  font-size: 23px;
`;
