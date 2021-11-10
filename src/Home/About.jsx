import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { about } from './data';

export default function About() {
  const children = about.map((d, i) => (
    <QueueAnim
      component={Col}
      key={i}
      type="bottom"
      className="col"
      componentProps={{ xs: { span: 24 }, sm: { span: 8 } }}
    >
      <div key="image" className="image" style={{ backgroundImage: `url(${d.src})` }} />
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));
  return (
    <div className="home-layout-wrapper home-about-wrapper" id="home-about" >
      <h2>To Be Lazzzy is to Be Efficient</h2>
      <i className="line" />
      <OverPack className="home-layout" location="home-about" playScale={0.4}>
        <QueueAnim className="home-about" type="bottom" key="home-about" ease="easeOutQuart" leaveReverse>
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
}
