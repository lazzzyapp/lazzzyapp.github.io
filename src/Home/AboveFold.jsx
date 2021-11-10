import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button, Col } from 'antd';
import AboveFoldImage from './LazzzyAnimation';

class AboveFold extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-abovefold',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim component={Col} className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              Lazzzy Productivity Suite
            </h1>
            <p key="p">Simple online tools to maximize your web browsing efficiency with minimal effort. Install, copy, click. That's all it takes to save content where you want it, how you want it.</p>
            <p key="p">Yeah, it's that easy.</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                window.location.href = '#';
              }}
              >
                Be Lazzzy, Test Alpha
              </Button>
            </span>
          </QueueAnim>

          <QueueAnim className={`${className}-image-wrapper`} component={Col}>
            <AboveFoldImage />
          </QueueAnim>
        </div>
      </div>
    );
  }
}

export default AboveFold;
