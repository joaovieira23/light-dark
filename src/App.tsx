import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import userPersistedState from './utils/userPersistedState';

import GlobalStyle from './styles/global';
import Header from './Components/Header';

function App() {
  const [theme, setTheme] = userPersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
