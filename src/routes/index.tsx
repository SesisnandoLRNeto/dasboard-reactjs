import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import AppRoutes from './app.routes';

const Routes: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Layout>
);
export default Routes;
