import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/19');
    const data = await response.json();
    setCharacters(data);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  const Header = styled.header`
    border-bottom: 1px solid #252525;
    width: 100%;
    height: 65px;
  `;
  const ContainerNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
  `;
  const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  `;
  const Title = styled.h1`
    margin-left: 10px;
    align-items: center;
  `;
  const Item = styled.li`
    margin: 0 10px;
  `;

  return (
    <Header>
      <ContainerNav>
        <Icon>
          <Image src={characters.image} alt="character" />
          <Title>Rick and Morty</Title>
        </Icon>
        <List>
          <Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Item>
          <Item>
            <Link href="/Characters">
              <a>Character</a>
            </Link>
          </Item>
          <Item>
            <Link href="/MainSlider">
              <a>Slider</a>
            </Link>
          </Item>
          <Item>
            <Link href="/MainSlider">
              <a>About</a>
            </Link>
          </Item>
        </List>
        <button type="button">Mode</button>
      </ContainerNav>
    </Header>
  );
};

export default Header;
