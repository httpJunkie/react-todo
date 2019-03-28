import React, { useContext } from 'react';
import './Sidenav.css';

import Menu from './Menu';

/* We need data from our context at this layer so that we can toggle the sidenav */
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