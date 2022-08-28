import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/variableCss.css';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
// import GlobalStyle from './Styles/global-styles';
import theme from './Styles/theme';
import { ThemeProvider } from './Styles/themed-components';
import 'normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
