import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Lazzzy App</span>
          </a>
          <span className="motto">Embrace the lazzzy <span className="you">you.</span></span>
        </h1>
      </div>
    </header>
  );
}
