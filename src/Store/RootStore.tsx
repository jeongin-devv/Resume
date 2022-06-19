import React from 'react';
import { menuStore } from './MenuStore';

export const rootStoreContext = React.createContext({
  menuStore,
});

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const RootStoreProvider: React.FC<Props> = ({ children }) => {
  const value = React.useMemo(() => ({
    menuStore,
  }), []);
  return (
    <rootStoreContext.Provider value={value}>
      {children}
    </rootStoreContext.Provider>
  );
};

export default { rootStoreContext, RootStoreProvider };
