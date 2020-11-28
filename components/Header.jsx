import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuButton from '../components/MenuButton';
import {
  ContainerHeader,
  Mode,
} from './styles/Header';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ContainerHeader>
      <MenuButton type="button" open={open} handleClick={handleClick} />
      <Navbar open={open} />
      <Mode type="button">Mode</Mode>
    </ContainerHeader>
  );
};

export default Header;
