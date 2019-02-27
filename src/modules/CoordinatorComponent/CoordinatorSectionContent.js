import React from 'react';
import PropTypes from 'prop-types';
import ResponsiblePersonSelect from './ResponsiblePersonSelect';
import EmailInput from './EmailInput';

class CoordinatorSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiblePersonSelect onChange={this.props.onChange} />
        <EmailInput onChange={this.props.onChange} />
      </React.Fragment>
    );
  }
}

CoordinatorSectionContent.propTypes = {
  onChange: PropTypes.func,
};

export default CoordinatorSectionContent;
