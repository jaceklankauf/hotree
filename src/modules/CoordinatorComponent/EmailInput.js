import React from 'react';
import Input from '../../base/common/components/Input/Input';

export class EmailInput extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="email"
          onChange={this.onChange}
          name="email"
          label="EMAIL"
          placeholder="Email"
        />
      </div>
    );
  }
}

export default EmailInput;
