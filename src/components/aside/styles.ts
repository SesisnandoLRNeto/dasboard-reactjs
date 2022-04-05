import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
  margin-left: 20px;
`;

export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  margin-left: 20px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;

  margin: 7px;

  color: ${({ theme }) => theme.colors.info};
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
`;
