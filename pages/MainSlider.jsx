import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import {
  ContainerSlider,
  ContainerImage,
  ImageCharacter,
  Name,
} from './styles/Slider';

const MainSlider = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2,10,11');
    const data = await response.json();
    setCharacters(data);
  }

  useEffect(() => {
    getCharacters();
    setInterval(() => {
      setCount((count) => {
        return characters.length < count + 2 ? 0 : count + 1;
      });
    }, 9000);
  }, []);

  return (
    <Layout>
      <ContainerSlider>
        {characters.map((character, index) => {
          if (count == index)
            return(
              <ContainerImage
                key={index}
              >
                <ImageCharacter
                  src={character.image}
                  alt="character"
                />
                <Name>{character.name}</Name>
              </ContainerImage>
            );
        })}
      </ContainerSlider>
    </Layout>
  );
};

export default MainSlider;
