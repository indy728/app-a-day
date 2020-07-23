import React, { Component } from 'react';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Flicks from './components/Flicks';

const theme = {
  primary: 'dodgerblue',
  button: {
    enabled: {
      background: 'ghostwhite',
      color: 'dodgerblue',
    },
    disabled: {
      background: '#c0d1ed',
      color: '#97a5bd',
    }
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Flicks />
      </ThemeProvider>
    )
  }
}

export default App;
