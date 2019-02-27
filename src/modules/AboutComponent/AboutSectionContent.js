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
        <TitleComponent onChange={this.props.onChange}/>
        <TextAreaComponent onChange={this.props.onChange}/>
        <CategorySelect onChange={this.props.onChange}/>
        <PaymentRadioInput onChange={this.props.onChange}/>
        <RewardInput onChange={this.props.onChange}/>
      </div>
    );
  }
}

AboutSectionContent.propTypes = {
  onChange: PropTypes.func,
};

export default AboutSectionContent;
