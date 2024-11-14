import React from 'react';
import './Home.css'; // Import file CSS

function Home({ onConnect }) {
  return (
    <div className="home-container">
      <button className="connect-button" onClick={onConnect}>
        Connect Wallet
      </button>
    </div>
  );
}

export default Home;
