import React from 'react';
import Titlebar from '../modules/Titlebar/Titlebar';
import Section from '../base/common/components/Section/Section';
import AboutComponent from '../modules/AboutComponent/AboutComponent';
import CoordinatorComponent from '../modules/CoordinatorComponent/CoordinatorComponent';

export class MainView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <AboutComponent />
        <CoordinatorComponent/>
        <Section text="When" />
      </React.Fragment>
    );
  }
}

export default MainView;
