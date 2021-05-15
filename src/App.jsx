import React from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
