import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label, placeholder, onChange, required, ...props } = this.props;
    return (
      <div className="htr-input-wrapper">
        <div className="htr-label-box">
          <label
            className="htr-label"
            htmlFor={name}
          >
            {label}
          </label>
        </div>
        <div className="htr-input-box">
          <input
            required={required}
            onChange={onChange}
            className="htr-input"
            name={name}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    );
  }
}

Input.defaultProps = {
  input: {
    name: null,
    onChange: null,
  }
};

Input.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'hidden', 'password', 'tel', 'search', 'date', 'time']),
  label: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
