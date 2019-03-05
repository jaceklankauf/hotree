import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../base/common/components/Section/Section';
import WhenSectionContent from './WhenSectionContent';

export class WhenComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="When">
          <WhenSectionContent
            onChange={this.props.onChange}
            onDateTimeChange={this.props.onDateTimeChange}
            required={this.props.required}
          />
        </Section>
      </div>
    );
  }
}

WhenComponent.propTypes = {
  onChange: PropTypes.func,
  onDateTimeChange: PropTypes.func,
  required: PropTypes.array
};

export default WhenComponent;
