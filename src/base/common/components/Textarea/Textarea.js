import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, placeholder, onChange, required, ...props } = this.props;

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
            name={name}
            id={name}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    );
  }
}

TextArea.defaultProps = {
  input: {
    name: null,
    onChange: null,
    maxLength: null,
    wrap: null
  },
  rows: 4
};

TextArea.propTypes = {
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
