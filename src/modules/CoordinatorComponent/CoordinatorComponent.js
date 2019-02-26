import React from 'react';
import Section from '../../base/common/components/Section/Section';
import CoordinatorSectionContent from './CoordinatorSectionContent';

export class CoordinatorComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="Coordinator">
          <CoordinatorSectionContent />
        </Section>
      </div>
    );
  }
}

export default CoordinatorComponent;
