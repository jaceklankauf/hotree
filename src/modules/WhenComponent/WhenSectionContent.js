import React from 'react';
import PropTypes from 'prop-types';
import DurationComponent from './DurationComponent';
import StartTimeComponent from './StartTimeComponent';

class WhenSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StartTimeComponent onChange={this.props.onChange}/>
        <DurationComponent onChange={this.props.onChange}/>
      </React.Fragment>
    );
  }
}

WhenSectionContent.propTypes = {
  onChange: PropTypes.func,
};

export default WhenSectionContent;
