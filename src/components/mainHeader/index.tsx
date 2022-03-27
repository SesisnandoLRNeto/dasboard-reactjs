import React, { useMemo } from 'react';
import { Container, Welcome, Profile, UserName } from './styles';
import emojis from '../../utils/emojis';
import Toggle from '../toggle';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Hello, {emoji}</Welcome>
        <UserName>Sesisnando</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
