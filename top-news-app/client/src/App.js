import React from 'react';
import GlobalStyle from 'themes/GlobalStyle';
import News from 'components/News';

function App() {
  return (
    <>
      <GlobalStyle />
      <News />
      <a href="https://kyledevlinmurray.com">Back to Kyle's Homepage</a>
    </>
  );
}

export default App;
