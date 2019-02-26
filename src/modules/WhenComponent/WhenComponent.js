import React from 'react';
import Section from '../../base/common/components/Section/Section';
import WhenSectionContent from './WhenSectionContent';

export class WhenComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="When">
          <WhenSectionContent />
        </Section>
      </div>
    );
  }
}

export default WhenComponent;
