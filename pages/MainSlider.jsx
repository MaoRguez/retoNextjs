import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';

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
    }, 6000);
  }, []);

  return (
    <Layout>
      <section>
        {characters.map((character, index) => {
          if (count === index)
            return(
              <div key={index}>
                <img src={character.image} alt="character" />
                <h2>{character.name}</h2>
              </div>
            );
        })}
      </section>
    </Layout>
  );
};

export default MainSlider;
