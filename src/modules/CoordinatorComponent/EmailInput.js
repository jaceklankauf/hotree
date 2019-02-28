import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../base/common/components/Input/Input';

export class EmailInput extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="email"
          onChange={this.props.onChange}
          name="email"
          label="EMAIL"
          placeholder="Email"
        />
      </div>
    );
  }
}

EmailInput.propTypes = {
  onChange: PropTypes.func,
};


export default EmailInput;
