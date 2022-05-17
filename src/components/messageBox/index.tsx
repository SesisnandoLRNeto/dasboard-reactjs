import React from 'react';

import { Container } from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => (
  <Container>
    <header>
      {title} <img src={icon} alt={`icon'-${title}`} />
      <p>{description}</p>
    </header>
    <footer>{footerText}</footer>
  </Container>
);

export default MessageBox;
