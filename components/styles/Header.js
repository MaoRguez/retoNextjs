import styled from 'styled-components';

export const ContainerHeader = styled.header`
  border-bottom: 1px solid #252525;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 426px) {
    width: 100%;
  }
`;

export const Mode = styled.button`
  margin-right: 20px;
`;