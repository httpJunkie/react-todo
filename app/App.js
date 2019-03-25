import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Home from './Home';
// import Todos from './todos/Todos';
const Todos = lazy(() => import('./todos/Todos'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <div className="padded">
            <Switch>
              <Route exact path="/" component={Home} />
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/todos" component={Todos} />
              </Suspense>
              <Route render={() => {
                return <h2 className="four-o-four">404 Page Not Found</h2>
              }} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;