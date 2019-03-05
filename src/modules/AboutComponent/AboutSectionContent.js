import React from 'react';
import PropTypes from 'prop-types';
import CategorySelect from './CategorySelect';
import PaymentRadioInput from './PaymentRadioInput';
import RewardInput from './RewardInput';
import TitleComponent from './TitleComponent';
import TextAreaComponent from './TextAreaComponent';

class AboutSectionContent extends React.Component {
  render() {
    return (
      <div>
        <TitleComponent onChange={this.props.onChange} required={this.props.required} />
        <TextAreaComponent onChange={this.props.onChange} required={this.props.required} />
        <CategorySelect onChange={this.props.onChange} />
        <PaymentRadioInput onChange={this.props.onChange} required={this.props.required} />
        <RewardInput onChange={this.props.onChange} />
      </div>
    );
  }
}

AboutSectionContent.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.array
};

export default AboutSectionContent;
