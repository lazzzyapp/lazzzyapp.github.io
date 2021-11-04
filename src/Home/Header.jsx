import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Lazzzy Apps</span>
          </a>
          <span>Embrace the lazzzy <span className="you">you.</span></span>
        </h1>
      </div>
    </header>
  );
}
