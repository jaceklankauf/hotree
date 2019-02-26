import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { name, placeholder, value, onChange, ...props } = this.props;
    return (
      <div className="htr-number-input-box">
        <input
          onChange={onChange}
          className="htr-input"
          name={name}
          placeholder={placeholder}
          value={value}
          {...props}
        />
      </div>
    );
  }
}

NumberInput.defaultProps = {
  input: {
    name: null,
    value: null,
    onChange: null,
  },
  value: ''
};

NumberInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'hidden', 'password', 'tel', 'search', 'date', 'time']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default NumberInput;
