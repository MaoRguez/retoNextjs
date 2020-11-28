import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {
  Bottom,
  Social,
  Create,
  Paragraph,
} from './styles/Footer';

const Footer = () => {
  const Image = styled.img`
  margin-right: 20px;
`;

  return(
    <Bottom>
      <Social>
        <Image
          src="/instagram.svg"
          alt="Instagram"
          width={30}
          height={30}
        />
        <Image
          src="/twitter.svg"
          alt="Twitter"
          width={30}
          height={30}
        />
        <Image
          src="/linkedin.svg"
          alt="Linkedin"
          width={30}
          height={30}
        />
      </Social>
      <Create>
        <Paragraph>Hecho por <strong>Mauricio</strong></Paragraph>
        <Paragraph>Create in</Paragraph>
        <Image
          src="/vercel.svg"
          alt="vercel"
          width={55}
          height={55}
        />
      </Create>
    </Bottom>
  );
};

export default Footer;
