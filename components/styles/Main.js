import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  @media screen and (max-width: 426px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const MainCharacter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const Description = styled.div`
  margin-left: 10px;
`;

export const SubTitle = styled.h3`
  font-weight: 700;
`;

export const Paragraph = styled.p`
  margin: 8px 0;
`;