import React, { useState, useEffect } from 'react';
import {
  Container,
  MainCharacter,
  Image,
  Description,
  SubTitle,
  Paragraph,
} from './styles/Main';

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

  return (
    <Container>
      {characters.map(character => (
        <MainCharacter key={character.id}>
          <Image src={character.image} alt="character" />
          <Description>
            <SubTitle>Name: {character.name}</SubTitle>
            <Paragraph>
              <strong>Status:</strong> {character.status}
            </Paragraph>
            <Paragraph>
              <strong>Gender:</strong> {character.gender}
            </Paragraph>
            <Paragraph>
              <strong>Species:</strong> {character.species}
            </Paragraph>
          </Description>
        </MainCharacter>
      ))}
    </Container>
  );
};

export default Main;