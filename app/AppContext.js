import React, { useState, createContext } from 'react';

const AppContext = createContext();
const AppProvider = (props) => {

  const defaultState = {
    navOpen: false,
    toggleSidenav: (value) => {
      setApp((data) => ({ ...data, navOpen: value }))
    }
  }
  const [appData, setApp] = useState(defaultState);

  return (
    <AppContext.Provider value={appData}>
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };