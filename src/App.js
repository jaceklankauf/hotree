import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from './views/MainView';
import Success from './views/Success';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainView} exact={true}/>
          <Route path="/submit" component={Success} exact={true}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
