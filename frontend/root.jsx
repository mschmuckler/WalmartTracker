import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

const Root = () => {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
};

export default Root;
