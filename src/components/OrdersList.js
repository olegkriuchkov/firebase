import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import firebase from 'firebase';
import lodash from 'lodash';

import {getOrders} from '../actions/actions';

const tableHeaders = [
    '#', 
    'Username', 
    'Description', 
    'Status', 
    'Total Price', 
    'Purchase price',
    'Address',
    'Creacted at',
    '',
];

const mapStateToProps = (state) => {
    return {...state};
  };
  
const mapDispatchToProps = {
    getOrders
};


class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        const {getOrders} = this.props;
        getOrders();
    }
    deleteOrder = (i) => {
        // ordersList.splice(i,1);
        // this.setState({
        //     ordersList: ordersList
        // });
    }
    render() {
        console.log("Orders List: ", this.props);
        const {orders} = this.props;
        return (
            <div>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, i) => {
                                return (
                                    <th scope="col" key={i}>{header}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {lodash.map(orders, (order, i) => {
                            return (
                                <TableRow order={order} key={i} deleteOrder={this.deleteOrder} rowNumber={i}/>
                            )
                        })}
                    </tbody>
                </table>
                Total Profit:
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);