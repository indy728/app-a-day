import React from 'react';
import GlobalStyle from 'themes/GlobalStyle';
import LoveList from 'components/LoveList'
import palette from 'themes/palette';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
    <ThemeProvider theme={palette}>
      <GlobalStyle palette={palette} />
      <LoveList />
      <a href="https://kyledevlinmurray.com">Back to Kyle's Homepage</a>
    </ThemeProvider>
    </>
  );
}

export default App;
