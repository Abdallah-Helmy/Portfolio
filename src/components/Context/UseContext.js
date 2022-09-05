import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [homedLoader, sethomedLoader] = useState(false);
  const [aboutdLoader, setaboutdLoader] = useState(false);
  const [worksdLoader, setworksdLoader] = useState(false);
  const [contactdLoader, setcontactdLoader] = useState(false);

  const setHomeshow = () => {
    sethomedLoader(true);
  };

  const setAboutshow = () => {
    setaboutdLoader(true);
  };

  const setWorksshow = () => {
    setworksdLoader(true);
  };

  const setcontactshow = () => {
    setcontactdLoader(true);
  };

  return <AppContext.Provider value={{ homedLoader, setHomeshow, aboutdLoader, setAboutshow, worksdLoader, setWorksshow, contactdLoader, setcontactshow }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
