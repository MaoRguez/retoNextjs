import styled from 'styled-components';

export const RickandMorty = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  padding: 15px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 426px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 376px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 200px;
  padding: 10px 0;
  margin-top: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow:0px 2px 3px rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
`;

export const subTitle = styled.h2`
  font-weight: bold;
`;