import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Lab from './pages/lab';
import Login from './pages/login';

class App extends Component {
  render() {
    const App = () => (
      <div >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/lab' component={Lab}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/list' component={List}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
