import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../base/common/components/Section/Section';
import AboutSectionContent from './AboutSectionContent';

export class AboutComponent extends React.Component {
  render() {
    return (
      <div>
        <Section text="About">
          <AboutSectionContent onChange={this.props.onChange} />
        </Section>
      </div>
    );
  }
}

AboutComponent.propTypes = {
  onChange: PropTypes.func,
};

export default AboutComponent;
