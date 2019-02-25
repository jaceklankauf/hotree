import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, placeholder, value, onChange, required, ...props } = this.props;

    return (
      <div className="htr-textarea-wrapper">
        <div className="htr-label-box">
          <label
            className="htr-label"
            htmlFor={name}
          >
            {label}
          </label>
        </div>
        <div className="htr-input-box">
          <textarea
            required={required}
            onChange={onChange}
            className="htr-input"
            id={name}
            placeholder={placeholder}
            value={value}
            {...props}
          />
        </div>
      </div>
    );
  }
}

TextArea.defaultProps = {
  input: {
    value: null,
    name: null,
    onChange: null,
    maxLength: null,
    wrap: null
  },
  rows: 4
};

TextArea.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'hidden', 'password', 'tel', 'search', 'date', 'time']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  wrap: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default TextArea;
