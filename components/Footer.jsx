import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Footer = () => {
  const Bottom = styled.footer`
    text-align: center;
    top: 0;
    width: 100%;
    height: 65px;
    border-top: 1px solid #252525;
  `;
  const Create = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
  `;
  const Social = styled.div`
    margin-top: 20px;
  `;
  const Paragraph = styled.p`
    margin-right: 10px;
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
