import React, { useState } from 'react';

import Input from '../../components/input';
import Button from '../../components/button';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';
import { Container, Form, FormTitle, Logo } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt='my wallet' />
        <h2>My Wallet</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Signin</FormTitle>

        <Input
          type='email'
          placeholder='e-mail'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type='submit'>Signin</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
