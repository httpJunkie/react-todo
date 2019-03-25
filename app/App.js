import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

import SideNav from './Sidenav';
import Home from './Home';
import Todos from './todos/Todos';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <BrowserRouter>
      <div className="app-container">
        <SideNav menu={menuOpen} />
        <div className="view">
          <div className="topnav">
            <ul>
              <li><a className="hoverable" onClick={toggleMenuOpen}><FontAwesomeIcon icon="bars" /></a></li>
              <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
              <li><a href="https://github.com/httpJunkie/react-todo">Source Code</a></li>
            </ul>
          </div>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todos" component={Todos} />
              <Route render={() => <h2 className="four-o-four">404 Page Not Found</h2>} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;