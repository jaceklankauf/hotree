import React from 'react';
import PropTypes from 'prop-types';

export class Success extends React.Component {
  render() {
    const { text, children } = this.props;
    return (
      <div className="success-section-view">
        <div className="success-section-box container">
          <div className="success-section-title">
            {text}
          </div>
          <div className="success-section-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Success.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,

};

export default Success;
