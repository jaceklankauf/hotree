import React from 'react';
import Input from '../../base/common/components/Input/Input';

class AboutSectionContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
    };
  }

  titleInputOnChange = (e) => {
    this.setState({
      titleInputValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input
          required={true}
          type="text"
          onChange={this.titleInputOnChange}
          name="Title"
          label="TITLE"
          placeholder="Make it short and clear"
          value={this.state.titleInputValue}
        />
      </div>
    );
  }
}

export default AboutSectionContent;
