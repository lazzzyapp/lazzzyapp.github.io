import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { footer } from './data';


function antCloudFooter() {
  const children = footer.map((d, i) => (
    <QueueAnim type="bottom" key={i} onClick={() => { window.location.href = `url(${d.src})`; }} style={{ margin: '0 10px', padding: '0' }}>
      <div key="social" className="image" style={{ backgroundImage: `url(${d.logo})` }} />
    </QueueAnim>
  ));
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
    <div className="home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright ©2021 Lazzzy, LLC |  A Michigan Limited Liability Company | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
