import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {
  const appData = {
    navOpen: false,
    toggleSidenav: (value) => {
      setApp(appData => ({ ...appData, navOpen: value }))
    }
  }
  const [app, setApp] = useState(appData);

  {/* 
    This is a component, it returns JSX, uses props.children 
    to give access to child components 
  */}
  
  return (
    <AppContext.Provider value={app}>
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };