import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import Landing from 'Landing';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Landing />
  </ThemeProvider>,
  document.getElementById('root')
);
