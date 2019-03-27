import React from 'react';
import './Home.css';

function Home() {
  document.title = `TripXpert Home`;
  return (
    <div className="view-home">
      <h1>A simple React project with routing and todos.</h1>
    </div>
  )
}

export default Home;