import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyle';
import News from 'components/News';

function App() {
  return (
    <>
      <GlobalStyle />
      <News />
    </>
  );
}

export default App;
