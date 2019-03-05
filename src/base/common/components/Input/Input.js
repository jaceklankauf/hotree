import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label, placeholder, onChange, required, ...props } = this.props;
    return (
      <div className="htr-input-wrapper">
        <div className="htr-label-box">
          <label
            className={`htr-label ${required ? 'required-label' : 'req'}`}
            htmlFor={name}
          >
            {label}
          </label>
        </div>
        <div className="htr-input-box">
          <input
            onChange={onChange}
            className={`htr-input ${required ? 'required' : ''}`}
            name={name}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {required ? <span className="tooltip">{name} cannot be empty</span> : ''}
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
