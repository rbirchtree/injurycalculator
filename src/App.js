import React, { Component } from 'react';
import { BrowserRouter, Route, Link,  Switch} from 'react-router-dom';
import Weather from './components/Weather';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <li>
            <Link to="/calculator">Calculator</Link>
            <Link to="/weather">Weather</Link>
          </li>
        </div>
        <Switch>
          <Route exact path='/' component={Calculator}/>
          <Route exact path='/weather' component={Weather}/>          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
