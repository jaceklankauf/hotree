import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../base/common/components/Input/Input';

export class EmailInput extends React.Component {
  render() {
    const { required } = this.props;
    return (
      <div>
        <Input
          type="email"
          onChange={this.props.onChange}
          name="email"
          label="EMAIL"
          placeholder="Email"
        />
        {required ?
          <div className="htr-input-wrapper subsidiary">
            <div className="htr-label-box"></div>
            <div className="htr-input-box subsidiary-email-box">
              <div className="subsidiary-text">Insert email in correct format abcd@efgh.ijk</div>
            </div>
          </div>
          : ''}
      </div>
    );
  }
}

EmailInput.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool
};


export default EmailInput;
