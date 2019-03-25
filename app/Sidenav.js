import React from 'react';
import './Sidenav.css';

function SideNav(props) {
  return (
    <div className={'sidenav ' + (props.menu ? 'show' : 'hide')}>
      <div className="sidenav-container">
        <div className="nav-item">
          <a href="#">Item One</a>
        </div>
        <div className="nav-item">
          <a href="#">Item Two</a>
        </div>
        <div className="nav-item">
          <a href="#">Item Three</a>
        </div>
      </div>
    </div>
  )
}

export default SideNav;