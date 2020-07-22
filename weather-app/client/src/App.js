import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import Weather from './components/Weather';

const theme = {
  primary: 'orangered',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Weather />
      <a href="https://kyledevlinmurray.com">Back to Kyle's Homepage</a>
    </ThemeProvider>
  );
}

export default App;
