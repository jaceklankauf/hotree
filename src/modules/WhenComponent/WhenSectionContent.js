import React from 'react';
import PropTypes from 'prop-types';
import DurationComponent from './DurationComponent';
import StartTimeComponent from './StartTimeComponent';

class WhenSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StartTimeComponent
          onChange={this.props.onChange}
          onDateTimeChange={this.props.onDateTimeChange}
          required={this.props.required.indexOf('date') !== -1}
        />
        <DurationComponent onChange={this.props.onChange} />
      </React.Fragment>
    );
  }
}

WhenSectionContent.propTypes = {
  onChange: PropTypes.func,
  onDateTimeChange: PropTypes.func,
  required: PropTypes.array
};

export default WhenSectionContent;
