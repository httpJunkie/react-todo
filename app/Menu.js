import React from 'react';
import { NavLink } from 'react-router-dom';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

function Menu(props) {
  return (
    <ul>
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
      <li><a href="https://github.com/httpJunkie/react-todo">Source Code</a></li>
      <li><FontAwesomeIcon icon="bars" className="hoverable"/></li>
    </ul>
  )
}

export default Menu;