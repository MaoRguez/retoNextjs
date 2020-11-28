import styled from 'styled-components';

export const ContainerSlider = styled.section`
  text-align: center;
  margin: 60px;
`;

export const ContainerImage = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  @media screen and (max-width: 426px) {
    width: 318px;
    height: 318px;
    margin: 0 auto;
  }
`;

export const ImageCharacter = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  @media screen and (max-width: 426px) {
    width: 310px;
    height: 310px;
  }
`;

export const Name = styled.h2`
`;