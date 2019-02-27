import React from 'react';
import Titlebar from '../modules/Titlebar/Titlebar';
import Form from '../modules/Form/Form';

export class MainView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <Form />
      </React.Fragment>
    );
  }
}

export default MainView;
