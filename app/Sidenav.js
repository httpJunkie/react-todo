import React from 'react';
import './Sidenav.css';

function SideNav(props) {
  return (
    <div className={'sidenav ' + (props.menu ? 'show' : 'hide')}>
      <div className="sidenav-container">
        <div className="nav-item"><a href="#">Home</a></div>
        <div className="nav-item"><a href="#">Destinations</a></div>
        <div className="nav-item"><a href="#">Contact</a></div>
        <div className="nav-item"><a href="#">Source Code</a></div>
      </div>
    </div>
  )
}

export default SideNav;