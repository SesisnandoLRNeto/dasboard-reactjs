import React from 'react';
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemButton,
  MenuItemLink,
  Title,
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

import logImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <Container>
      <Header>
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
    </Container>
  );
};

export default Aside;
