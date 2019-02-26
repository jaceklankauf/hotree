import React from 'react';
import Titlebar from '../modules/Titlebar/Titlebar';
import AboutComponent from '../modules/AboutComponent/AboutComponent';
import CoordinatorComponent from '../modules/CoordinatorComponent/CoordinatorComponent';
import WhenComponent from '../modules/WhenComponent/WhenComponent';

export class MainView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <AboutComponent />
        <CoordinatorComponent/>
        <WhenComponent />
      </React.Fragment>
    );
  }
}

export default MainView;
