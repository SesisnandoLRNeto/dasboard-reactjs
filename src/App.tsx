import React from 'react';
import Dashboard from './pages/dashboard';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
