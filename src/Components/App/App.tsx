import React from 'react';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import RootRouter from 'Router/RootRouter';
import { AppContainer, AppContents } from './styles';

const HeaderTitle = 'Resume : Per Aspera ad Astra';
const footerDescription = '역경을 헤치고 저 별을 향해';

const App = () => (
  <AppContainer className="App">
    <Header title={HeaderTitle} />
    <AppContents>
      <RootRouter />
    </AppContents>
    <Footer description={footerDescription} />
  </AppContainer>
);

export default App;
