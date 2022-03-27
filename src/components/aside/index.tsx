import React from 'react';
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import logImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logImg} alt='My wallet logo' />
        <Title>My wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href='#'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdArrowDownward />
          Income
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdArrowUpward />
          Spent
        </MenuItemLink>
        <MenuItemLink href='#'>
          <MdExitToApp />
          Logout
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
