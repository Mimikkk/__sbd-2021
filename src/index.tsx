import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Frontend/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
const theme = createTheme();

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById('root'),
);
