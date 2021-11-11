import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { sponsors } from './data';

function getLi(num, d, i) {
  const t = num + 1;
  if (i > t * 4 - 1 || i < num * 4) {
    return null;
  }
  return (
    <Col className="col" span={4} key={i} offset={!(i % 4) ? 1 : 2}>
      <i style={{ backgroundImage: `url(${d})` }} />
    </Col>
  );
}
export default function Sponsors() {
  const children = [];
  for (let i = 0; i < Math.floor(sponsors.length / 4); i++) {
    children.push((
      <QueueAnim
        component={Row}
        type="bottom"
        key={i}
      >
        {sponsors.map(getLi.bind(this, i)).filter(item => item)}
      </QueueAnim>));
  }
  return (
    <div className="home-layout-wrapper home-sponsors-wrapper">
      <OverPack className="home-layout" playScale={0.3}>
        <QueueAnim className="home-sponsors" type="bottom" key="home-sponsors" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">Sponsors</h2>
          <i key="i" className="line" />
          {children}
        </QueueAnim>
      </OverPack>
    </div>
  );
}