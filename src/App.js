import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './container/Layout/Layout';
import Theme from './components/Theme/Theme';


function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
