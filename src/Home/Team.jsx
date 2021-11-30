import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { team } from './data';

export default function Team() {
  const children = team.map((d, i) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} className="col" key={i.toString()} style={{ paddingLeft: '1.25%', paddingRight: '1.25%' }}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
      >
        <div key="image" className="image" style={{ backgroundImage: `url(${d.person})` }} />
        <h3 key="h3">{d.title}</h3>
        {d.content}
        {d.exp && <div className="exp" key="exp">{d.exp}</div>}
      </QueueAnim>
    </Col>
  ));
  return (
    <div className="home-layout-wrapper home-team-wrapper">

      <h2 key="h2">Meet The Team</h2>
      <i key="i" className="line" />
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim
          className="home-team"
          type="bottom"
          key="home-team"
          ease="easeOutQuart"
          style={{ marginRight: '0', marginLeft: '0' }}
          leaveReverse
          componentProps={{ gutter: 171 }}
          component={Row}
        >
          {children}
        </QueueAnim>
      </OverPack>
    </div>);
}
