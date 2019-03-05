import React from 'react';
import Titlebar from '../modules/Titlebar/Titlebar';
import SuccessComponent from '../modules/SuccessComponent/SuccessComponent';

export class Success extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <SuccessComponent text="Success">Event has been created.</SuccessComponent>/>
      </React.Fragment>
    );
  }
}

export default Success;
