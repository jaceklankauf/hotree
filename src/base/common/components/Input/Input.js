import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label, placeholder, value, onChange, required,  ...props } = this.props;
    return (
      <div className="htr-input-wrapper">
        <label
          className="htr-label"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="htr-input-box">
          <input
            required={required}
            onChange={onChange}
            className="htr-input"
            name={name}
            placeholder={placeholder}
            value={value}
            {...props}
          />
        </div>
      </div>
    );
  }
}

Input.defaultProps ={
  input: {
    name: null,
    value: null,
    onChange: null,
  },
  value: ''
};

Input.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'hidden', 'password', 'tel', 'search', 'date', 'time']),
  label: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
