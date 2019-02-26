import React from 'react';
import ResponsiblePersonSelect from './ResponsiblePersonSelect';
import EmailInput from './EmailInput';

class CoordinatorSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiblePersonSelect />
        <EmailInput />
      </React.Fragment>
    );
  }
}

export default CoordinatorSectionContent;
