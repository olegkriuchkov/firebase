import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import OrdersList from './components/OrdersList';
import OrderCreate from './components/OrderCreate';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route path='/' component={MainPage}/>
              <Route path='/orderslist' component={OrdersList}/>
              <Route path='/ordercreate' component={OrderCreate}/>
          </div>
      </Router>
    );
  }
}

export default App;
