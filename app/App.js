import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
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
  const menuOpenDefault = useMediaPredicate("(min-width: 415px)") ? true : false;

  const [menuOpen, setMenuOpen] = useState(menuOpenDefault);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="view">
          <div className="topbar">
            <div className="logo">
              <span>LOGO</span>
            </div>
            <div className="nav">
              <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/todos">Todos</NavLink></li>
                <li><a href="https://github.com/httpJunkie/react-todo">Source Code</a></li>
                <li><FontAwesomeIcon icon="bars" className="hoverable" onClick={toggleMenuOpen} /></li>
              </ul>
            </div>
          </div>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todos" component={Todos} />
              <Route render={() => <h2 className="four-o-four">404 Page Not Found</h2>} />
            </Switch>
          </div>
        </div>
        <SideNav menu={menuOpen} />
      </div>
    </BrowserRouter>
  )
}

export default App;