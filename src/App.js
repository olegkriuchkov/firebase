import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {init as firebaseInit} from './javascripts/firebase';
import { connect } from 'react-redux';

import MainPage from './components/MainPage';
import OrdersList from './components/OrdersList';
import OrderCreate from './components/OrderCreate';

import {getOrders} from './actions/actions';

firebaseInit();

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = {
  getOrders
};

class App extends Component {
  componentDidMount() {
    const {getOrders} = this.props;
    // getOrders();
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
