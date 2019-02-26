import React from 'react';
import Input from '../../base/common/components/Input/Input';

export class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInputValue: '',
      counter: 0,
    };
  }

  emailInputOnChange = (e) => {
    this.setState({
      emailInputValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input
          required={true}
          type="email"
          onChange={this.emailInputOnChange}
          name="email"
          label="EMAIL"
          placeholder="Email"
          value={this.state.emailInputValue}
        />
      </div>
    );
  }
}

export default EmailInput;
