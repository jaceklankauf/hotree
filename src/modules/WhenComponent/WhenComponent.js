import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../base/common/components/Section/Section';
import WhenSectionContent from './WhenSectionContent';

export class WhenComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="When">
          <WhenSectionContent onChange={this.props.onChange}/>
        </Section>
      </div>
    );
  }
}

WhenComponent.propTypes = {
  onChange: PropTypes.func,
};

export default WhenComponent;
