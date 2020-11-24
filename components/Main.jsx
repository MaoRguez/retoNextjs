import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2');
    const data = await response.json();
    setCharacters(data);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 0;
  `;
  const MainCharacter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
  `;
  const Description = styled.div`
    margin-left: 10px;
  `;

  return (
    <Container>
      {characters.map(character => (
        <MainCharacter key={character.id}>
          <Image src={character.image} alt="character" />
          <Description>
            <h2>Name: {character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
          </Description>
        </MainCharacter>
      ))}
    </Container>
  );
};

export default Main;