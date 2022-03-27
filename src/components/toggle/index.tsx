import React from 'react';
import { Container, ToggleLable, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLable>Light</ToggleLable>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('changed')}
    />
    <ToggleLable>Dark</ToggleLable>
  </Container>
);

export default Toggle;
