import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../AppContext";

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

const Menu = () => {
  const context = useContext(AppContext);
  return (
    <ul>
      <li className="link"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li className="link"><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
      <li className="link"><a href="https://github.com/httpJunkie/react-todo">Source Code</a></li>
      <li className="menu">
        <FontAwesomeIcon icon="bars" className="hoverable" onClick={() => {
          context.toggleSidenav(!context.navOpen)
        }} />
      </li>
    </ul>
  )
}

export default Menu;