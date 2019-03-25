import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>A simple React project with routing and todos.</h1>
      <Link className="button" to="/todos">Todos</Link>
    </div>
  )
}

export default Home;