import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../base/common/components/Section/Section';
import CoordinatorSectionContent from './CoordinatorSectionContent';

export class CoordinatorComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="Coordinator">
          <CoordinatorSectionContent onChange={this.props.onChange} required={this.props.required} />
        </Section>
      </div>
    );
  }
}

CoordinatorComponent.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.array
};

export default CoordinatorComponent;
