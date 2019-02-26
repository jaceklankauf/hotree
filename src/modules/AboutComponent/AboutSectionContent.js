import React from 'react';
import Input from '../../base/common/components/Input/Input';
import TextArea from '../../base/common/components/Textarea/Textarea';
import CategorySelect from './CategorySelect';
import PaymentRadioInput from './PaymentRadioInput';
import RewardInput from './RewardInput';

class AboutSectionContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInputValue: '',
      descriptionInputValue: '',
      counter: 0,
    };
  }

  titleInputOnChange = (e) => {
    this.setState({
      titleInputValue: e.target.value,
    });
  };

  descriptionInputOnChange = (e) => {
    this.setState({
      descriptionInputValue: e.target.value,
      counter: e.target.value.length
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
        <TextArea
          required={true}
          type="text"
          onChange={this.descriptionInputOnChange}
          name="Description"
          label="DESCRIPTION"
          placeholder="Write about your event, be creative"
          value={this.state.descriptionInputValue}
          maxLength={140}
          wrap="soft"
        />
        <div className="htr-input-wrapper">
          <div className="htr-label-box"></div>
          <div className="htr-input-box subsidiary-text-box">
            <div className="subsidiary-text">Max length 140 characters</div>
            <div className="subsidiary-text">{this.state.counter}/140</div>
          </div>
        </div>
        <CategorySelect />
        <PaymentRadioInput />
        <RewardInput/>
      </div>
    );
  }
}

export default AboutSectionContent;
