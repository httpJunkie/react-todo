import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/todos">Todos</NavLink>
        </li>
        <li>
          <a href="https://github.com/httpJunkie/react-todo">Source Code</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;