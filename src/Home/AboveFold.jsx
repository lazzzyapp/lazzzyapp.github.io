import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Button, Col, Row, Card } from 'antd';
import AboveFoldImage from './LazzzyAnimation';

export default function AboveFold() {
  return (
    <Row className="home-abovefold" responsive>
      <QueueAnim component={Col} componentProps={{ xs: { order: 2, span: 24 }, md: { order: 1, span: 12 } }} className="home-abovefold-content-wrapper" delay={300} ease="easeOutQuart">
        <Card className="card-fold">
          <h1 key="h2">
            Lazzzy Productivity Suites
          </h1>
          <p key="p1">Simple online tools to maximize your web browsing efficiency with minimal effort. Install, copy, click. That's all it takes to save content where you want it, how you want it.</p>
          <p key="p2">Yeah, it's that easy.</p>
          <Button
            type="primary"
            key="button"
            onClick={() => {
                window.location.href = 'https://github.com/lazzzyapp/lazzzy-extension/releases';
              }}
          >
            Be Lazzzy, Test Alpha
          </Button>
        </Card>
      </QueueAnim>
      <QueueAnim className="home-abovefold-image-wrapper" component={Col} componentProps={{ xs: { order: 1, span: 24 }, md: { order: 2, span: 10 } }}>
        <Card className="card-fold">
          <AboveFoldImage />
        </Card>
      </QueueAnim>
    </Row>
  );
}
