import styled, { css } from 'styled-components';

interface IContainerProps {
  menuIsOpened: boolean;
}

interface IThemeToggleFooterProps {
  menuIsOpened: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  position: relative;

  @media (max-width: 600px) {
    padding-left: 20px;
    position: fixed;

    z-index: 2;
    width: 170px;

    height: ${(props) => (props.menuIsOpened ? '100vh' : '70px')};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpened &&
      css`
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      `};
  }
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

  @media (max-width: 600px) {
    display: none;
  }
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

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;

  font-size: 16px;

  margin: 7px;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.info};
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

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ToggleMenu = styled.button`
  height: 40px;
  width: 40px;

  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  border-radius: 5px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;

  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'flex' : 'none')};
  }
`;
