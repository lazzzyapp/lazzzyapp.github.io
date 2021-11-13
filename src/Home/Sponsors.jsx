import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Col, Row } from 'antd';
import { sponsors } from './data';

/* function getLi(num, d, i) {
  const t = num + 1;
  if (i > t * 4 - 1 || i < num * 4) {
    return null;
  }
  return (
    <Col className="col" span={4} key={i} offset={!(i % 4) ? 1 : 2}>
      <i style={{ backgroundImage: `url(${d})` }} />
    </Col>
  );
} */
export default function Sponsors() {
  const children = sponsors.map((d, i) => (
    <QueueAnim
      component={Col}
      key={i}
      type="bottom"
      className="col"
      componentProps={{ xs: { span: 1 }, sm: { span: 1, offset: 1 } }}
      onClick={() => { window.open(`${d.src}`, '_blank'); }}
    >
      <a key="image" className="sponsorimage" style={{ backgroundImage: `url(${d.logo})` }} />
    </QueueAnim>
  ));
  return (
    <div className="home-layout-wrapper home-sponsors-wrapper">
      <h2 key="h2">Sponsors</h2>
      <i key="i" className="line" />
      <OverPack className="home-sponsors" playScale={0.3} >
        <QueueAnim className="home-layout " type="bottom" key="home-sponsors" ease="easeOutQuart" component={Row} leaveReverse>
          {children}
        </QueueAnim>
      </OverPack>
    </div>
  );
}
