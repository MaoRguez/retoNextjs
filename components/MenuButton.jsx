import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Icon = styled.div`
  border: none;
  box-shadow: 0px 0px 1px rgb(50, 50, 50);
  margin-top: .5em;
  margin-left: 1em;
`;

export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const MenuButton = ({ open, handleClick }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/19');
    const data = await response.json();
    setCharacters(data);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  return !open ? (
    <Icon onClick={handleClick}>
      <Image src={characters.image} alt="character" />
    </Icon>
  ) : (
    <Icon onClick={handleClick}>
      <svg
        className="svg-icon"
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="#2962ff"
      >
        <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
      </svg>
    </Icon>
  );
};

export default MenuButton;
