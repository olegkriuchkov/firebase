import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import MainPage from './components/MainPage';
import OrdersList from './components/OrdersList';
import OrderCreate from './components/OrderCreate';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div>
                <Route path='/' component={MainPage}/>
                <Route path='/orderslist' component={OrdersList}/>
                <Route path='/ordercreate' component={OrderCreate}/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
