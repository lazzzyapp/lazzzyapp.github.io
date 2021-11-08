import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { team } from './data';

export default function Team() {
  const children = team.map((d, i) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} className="col" key={i.toString()} style={{ paddingLeft: '1%', paddingRight: '1%' }}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
        onClick={() => { window.location.href = '#'; }}
      >
        <div key="image" className="image" style={{ backgroundImage: `url(${d.person})` }} />
        <h3 key="h3">{d.title}</h3>
        {d.content}
        {d.exp && <div className="exp" key="exp">{d.exp}</div>}
      </QueueAnim>
    </Col>
  ));
  return (
    <div className="home-layout-wrapper home-serve-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">Meet The Team</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 96 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
}
