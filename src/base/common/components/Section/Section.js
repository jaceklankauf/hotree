import React from 'react';
import PropTypes from 'prop-types';

export class Section extends React.Component {
  render() {
    const { text, children } = this.props;
    return (
      <div className="htr-section-view">
        <div className="htr-section-box container">
          <div className="htr-section-title">
            {text}
          </div>
          <div className="htr-section-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,

};

export default Section;
