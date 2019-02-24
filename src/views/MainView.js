import React from 'react';
import Titlebar from '../modules/Titlebar/Titlebar';
import Section from '../base/common/components/Section/Section';

export class MainView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <Section text="About" />
        <Section text="Coordinator" />
        <Section text="When" />
      </React.Fragment>
    );
  }
}

export default MainView;
