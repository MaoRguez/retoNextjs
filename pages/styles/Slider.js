import styled from 'styled-components';

export const ContainerSlider = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 550px;
  @media screen and (max-width: 426px) {
    height: 410px;
  }
`;

export const ContainerImage = styled.div`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 426px) {
    width: 318px;
    height: 318px;
  }
  @media screen and (max-width: 376px) {
    width: 310px;
    height: 310px;
  }
`;

export const ImageCharacter = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  @media screen and (max-width: 426px) {
    width: 310px;
    height: 310px;
    margin-left: 15px;
  }
  @media screen and (max-width: 376px) {
    width: 280px;
    height: 280px;
  }
`;

export const Name = styled.h2`
  text-align: center;
`;