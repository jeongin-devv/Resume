import React from 'react';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import RootRouter from 'Router/RootRouter';
import { AppContainer, AppContents } from './styles';

const HeaderTitle = 'Resume';

const App = () => (
  <AppContainer className="App">
    <Header title={HeaderTitle} />
    <AppContents>
      <RootRouter />
    </AppContents>
    <Footer />
  </AppContainer>
);

export default App;
