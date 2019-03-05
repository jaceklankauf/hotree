import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { name, placeholder, onChange, required, ...props } = this.props;
    return (
      <div className="htr-number-input-box">
        <input
          onChange={onChange}
          className={`htr-input ${required ? 'required' : 'req'}`} 
          name={name}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
}

NumberInput.defaultProps = {
  input: {
    name: null,
    onChange: null,
  },
};

NumberInput.propTypes = {
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'hidden', 'password', 'tel', 'search', 'date', 'time']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default NumberInput;
