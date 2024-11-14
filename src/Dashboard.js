import React from 'react';

function Dashboard({ account, onDisconnect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <p>Connected: {account}</p>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '10px', width: '150px', cursor: 'pointer' }}
        onClick={onDisconnect}
      >
        Disconnect
      </button>
    </div>
  );
}

export default Dashboard;