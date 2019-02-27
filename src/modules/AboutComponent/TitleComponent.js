import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../base/common/components/Input/Input';

class TitleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  render() {
    return (
      <div>
        <Input
          required={true}
          type="text"
          onChange={this.props.onChange}
          name="title"
          label="TITLE"
          placeholder="Make it short and clear"
          // value={this.state.inputValue}
        />
      </div>
    );
  }
}

TitleComponent.propTypes = {
  onChange: PropTypes.func,
};


export default TitleComponent;
