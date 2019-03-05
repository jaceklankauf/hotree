import React from 'react';
import PropTypes from 'prop-types';
import ResponsiblePersonSelect from './ResponsiblePersonSelect';
import EmailInput from './EmailInput';

class CoordinatorSectionContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiblePersonSelect
          onChange={this.props.onChange}
          required={this.props.required.indexOf('coordinator') !== -1}
        />
        <EmailInput
          onChange={this.props.onChange}
          required={this.props.required.indexOf('email') !== -1}
        />
      </React.Fragment>
    );
  }
}

CoordinatorSectionContent.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.array
};

export default CoordinatorSectionContent;
