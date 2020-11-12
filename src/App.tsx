import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from './Components/Header';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <Header />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
