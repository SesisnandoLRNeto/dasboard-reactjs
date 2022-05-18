import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoute from './auth.routes';

const Routes: React.FC = () => {
  const { logged } = useAuth();

  console.log(logged);

  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoute />}</BrowserRouter>
  );
};
export default Routes;
