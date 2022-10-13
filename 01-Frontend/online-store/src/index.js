import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import { obj } from './styles/theme';

const theme = createTheme(obj);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

