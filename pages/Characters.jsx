import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import {
  RickandMorty,
  Card,
  Image,
} from './styles/Characters';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    setCharacters(data.results);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  return(
    <Layout>
      <RickandMorty>
        {characters.map(character => (
          <Card key={character.id}>
            <Image src={character.image} alt="character" />
            <h2>{character.name}</h2>
          </Card>
        ))}
      </RickandMorty>
    </Layout>
  );
};

export default Characters;