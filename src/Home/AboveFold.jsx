import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
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
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              Lazzzy Apps
            </h1>
            <p key="p">Productivity suite to maximize your efficiency with minimal effort.</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                window.location.href = '/activity/home';
              }}
              >
                Be an
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <AboveFoldImage />
          </div>
        </div>
      </div>
    );
  }
}

export default AboveFold;
