import React from 'react';
import Link from 'next/link';
import {
  ContainerNav,
  List,
  Item,
  Anchor,
} from './styles/navbarStyles';

const Navbar = ({ open }) => {
  return (
    <ContainerNav open={open}>
      <List>
        <Item>
          <Link href="/">
            <Anchor>Home</Anchor>
          </Link>
        </Item>
        <Item>
          <Link href="/Characters">
            <Anchor>Character</Anchor>
          </Link>
        </Item>
        <Item>
          <Link href="/MainSlider">
            <Anchor>Slider</Anchor>
          </Link>
        </Item>
        <Item>
          <Link href="/MainSlider">
            <Anchor>About</Anchor>
          </Link>
        </Item>
      </List>
    </ContainerNav>
  );
};

export default Navbar;
