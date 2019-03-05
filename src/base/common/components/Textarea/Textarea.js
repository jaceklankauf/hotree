import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, placeholder, onChange, required, ...props } = this.props;

    return (
      <div className="htr-textarea-wrapper">
        <div className="htr-label-box">
          <label
            className={`htr-label ${required ? 'required-label' : 'req'}`}
            htmlFor={name}
          >
            {label}
          </label>
        </div>
        <div className="htr-input-box">
          <textarea
            onChange={onChange}
            className={`htr-input ${required ? 'required' : ''}`}
            name={name}
            id={name}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {required ? <span className="tooltip">{name} cannot be empty</span> : ''}
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
