import React from 'react';
import PropTypes from 'prop-types';

export class Section extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="htr-section-view">
        <div className="htr-section-box container">
          <div className="htr-section-title">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  text: PropTypes.string,
};

export default Section;
