import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../pages/signin';

const AuthRoute: React.FC = () => (
  <Routes>
    <Route path='/' element={<SignIn />} />
  </Routes>
);

export default AuthRoute;
