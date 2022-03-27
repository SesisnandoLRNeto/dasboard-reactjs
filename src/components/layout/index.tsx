import React from 'react';
import Aside from '../aside';
import Content from '../content';
import MainHeader from '../mainHeader';
import { GridLayout } from './styles';

const Layout: React.FC = () => {
  return (
    <GridLayout>
      <MainHeader />
      <Aside />
      <Content />
    </GridLayout>
  );
};

export default Layout;
