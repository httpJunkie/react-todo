import React, { useContext } from 'react';
import './Sidenav.css';

import Menu from './Menu';

/* We need context in this component to show/hide sidenav */
import { AppContext } from "../AppContext";

const SideNav = () => {
  const context = useContext(AppContext);
  return (
    <div className={'sidenav ' + (context.navOpen ? 'show' : 'hide')}>
      <Menu />
    </div>
  )
}

export default SideNav;