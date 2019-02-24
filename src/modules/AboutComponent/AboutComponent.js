import React from 'react';
import Section from '../../base/common/components/Section/Section';
import AboutSectionContent from './AboutSectionContent';

export class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="About">
          <AboutSectionContent />
        </Section>
      </div>
    );
  }
}

export default AboutComponent;
