import React, { useState } from 'react';
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemButton,
  MenuItemLink,
  Title,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import logImg from '../../assets/logo.svg';
import Toggle from '../toggle';

const Aside: React.FC = () => {
  const { logOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme?.title === 'dark' ? true : false
  );

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container menuIsOpened={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <LogImg src={logImg} alt='My wallet logo' />
        <Title>My wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href='/dashboard'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href='/list/income'>
          <MdArrowDownward />
          Income
        </MenuItemLink>
        <MenuItemLink href='/list/spent'>
          <MdArrowUpward />
          Spent
        </MenuItemLink>
        <MenuItemButton onClick={logOut}>
          <MdExitToApp />
          Logout
        </MenuItemButton>
      </MenuContainer>

      <ThemeToggleFooter menuIsOpened={toggleMenuIsOpened}>
        <Toggle
          labelLeft='Light'
          labelRight='Dark'
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
