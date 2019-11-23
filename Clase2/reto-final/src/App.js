import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className = "card">
        <h2>Super Early Bird Tickets</h2>
        <p className = "text-small">
          Full Conference pass
        </p>
        <h1>$299</h1>
        <button className = "inactive">Sold out</button>
        <p className = "text-small">
          Available until May 31st
        </p>
      </div>
      <div className = "card">
        <h2>Early Bird Tickets</h2>
        <p className = "text-small">
            Full Conference pass
        </p>
        <h1>$399</h1>
        <button className = "active">Buy Tickets</button>
        <p className = "text-small">
          Available until July 30th
        </p>
      </div>
      <div className = "card">
        <h2>Full Price Ticket</h2>
        <p className = "text-small">
            Full Conference pass
        </p>
        <h1>$499</h1>
        <button className = "active">Buy Tickets</button>
        <p className = "text-small">
            Available until May 31st
        </p>
      </div>
    </div>
  );
}

export default App;
