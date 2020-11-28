import styled from 'styled-components';

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: salmon;
    position: fixed;
    top: 10vh;
    right: ${props => (props.open ? '0' : '100%')};
    width: 100%;
    height: 90vh;
    transition: right 0.3s linear;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
  }
`;

export const Item = styled.li`
  margin: 0 10px;
  @media screen and (max-width: 426px) {
    margin: 30px;
  }
`;

export const Anchor = styled.a`
  &:hover {
    color: red;
  }
`;