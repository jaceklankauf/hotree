import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../base/common/components/Input/Input';

class TitleComponent extends React.Component {
  render() {
    return (
      <div>
        <Input
          required={this.props.required.indexOf('title') !== -1}
          type="text"
          onChange={this.props.onChange}
          name="title"
          label="TITLE"
          placeholder="Make it short and clear"
        />
      </div>
    );
  }
}

TitleComponent.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.array,
};

export default TitleComponent;
