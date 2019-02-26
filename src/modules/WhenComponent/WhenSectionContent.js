import React from 'react';
import DurationComponent from './DurationComponent';
import StartTimeComponent from './StartTimeComponent';

class WhenSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StartTimeComponent />
        <DurationComponent />
      </React.Fragment>
    );
  }
}

export default WhenSectionContent;
