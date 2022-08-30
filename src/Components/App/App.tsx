import React from 'react';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import RootRouter from 'Router/RootRouter';
import { RootStoreProvider } from 'Store/RootStore';
import {
  ProfilePath, TechnologyPath, ChatterboxPath, EnvironmentPath,
} from 'Router/RoutePath';
import { AppContainer, AppContents } from './styles';

const blogTitle = 'Per Aspera ad Astra';
const footerTitle = 'Per Aspera ad Astra';

const sections = [
  { title: 'Profile', url: ProfilePath },
  { title: 'Technology', url: TechnologyPath },
  { title: 'ChatterBox', url: ChatterboxPath },
  { title: 'Environment', url: EnvironmentPath },
];

const footerDescription = '역경을 헤치고 저 별을 향해';

const App = () => (
  <RootStoreProvider>
    <AppContainer className="App">
      <Header title={blogTitle} sections={sections} />
      <AppContents>
        <RootRouter />
      </AppContents>
      <Footer title={footerTitle} description={footerDescription} />
    </AppContainer>
  </RootStoreProvider>
);

export default App;
