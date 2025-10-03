import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { restaurants } from "../../api/Product";

const InputAddress = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    setResults(
      restaurants.filter((r) => {
        if (typeof r === "string") {
          return r.toLowerCase().includes(query.trim().toLowerCase());
        } else if (r && r.name) {
          return r.name.toLowerCase().includes(query.trim().toLowerCase());
        }
        return false;
      })
    );
  }, [query]);

  return (
    <DeliverysessionContent>
      <SearchContainer>
        <IconContainer>
          <SearchIcon />
        </IconContainer>
        <SearchInput
          type="text"
          placeholder="Search for Restaurant"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <Dropdown>
            {results.map((r, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => setQuery(typeof r === "string" ? r : r.name)}
              >
                {typeof r === "string" ? r : r.name}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </SearchContainer>
    </DeliverysessionContent>
  );
};

export default InputAddress;
export const Dropdown = styled.div`
  position: fixed;
  top: 9%;
  left: 58%;
  width: 15%;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
  &:hover {
    background: #f5f5f5;
  }
`;

import { IoSearchOutline } from "react-icons/io5";

export const DeliverysessionContent = styled.div`
  width: 20%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  top: 2%;
  right: 27%;



`;

export const SearchContainer = styled.div`
  position: relative;
  width: 30%;
`;
export const IconContainer = styled.div`
  position: fixed;
  top: 5.7%;
  right:43%;
  transform: translateY(-50%);
  color: #d5d8d7;
  font-size: 23px;
  background-color: green;
  width: 48px;
  height: 48px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 2;
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
 
  height: 3rem;
  padding: 8px;
  padding-left: 47px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #f0f0f0e6;
  margin-left: 1.5rem;
  color: #8c8787b7;
  position: fixed;
  right:27%
`;
