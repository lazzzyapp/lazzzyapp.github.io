import React from 'react';
import { footer } from './data';

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src="https://lazzzyapp.github.io/lazzzy-website/static/logo.png" width="175" height="75" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright ©2021 Lazzzy, LLC |  A Michigan Limited Liability Company | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;