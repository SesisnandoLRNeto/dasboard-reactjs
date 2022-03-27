import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import List from './pages/list';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
