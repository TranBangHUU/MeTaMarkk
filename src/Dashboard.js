import React from 'react';
import './Home.css'; // Sử dụng chung file CSS với Home

function Dashboard({ account, onDisconnect }) {
  return (
    <div className="home-container">
      <p className="account-text">Connected Succesfully: {account}</p>
      <button className="disconnect-button" onClick={onDisconnect}>
        Disconnect
      </button>
    </div>
  );
}

export default Dashboard;
