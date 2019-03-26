import React from 'react';
import './Sidenav.css';

import Menu from './Menu';

function SideNav(props) {
  return (
    <div className={'sidenav ' + (props.menu ? 'show' : 'hide')}>
      <Menu />
    </div>
  )
}

export default SideNav;