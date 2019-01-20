import React, { Component } from 'react';
import TableRow from './TableRow';

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

const ordersList = [
    {ordNum: 1, username: 'oleg', description: 'asd asd asd', status: 'new', totPrice: 120, purPrice: 100, address: 'aaaa', createdAt: Date.now()},
    {ordNum: 2, username: 'vlad', description: 'sdf sdf sdf', status: 'shipped', totPrice: 130, purPrice: 115, address: 'bbbb', createdAt: Date.now()},
    {ordNum: 3, username: 'bogdan', description: 'rty rty try', status: 'declined', totPrice: 110, purPrice: 90, address: 'cccc', createdAt: Date.now()},
    {ordNum: 4, username: 'ivan', description: 'hjk hjk hjk', status: 'accepted', totPrice: 155, purPrice: 120, address: 'dddd', createdAt: Date.now()},
];


class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersList: ordersList
        }
    }
    deleteOrder = (i) => {
        ordersList.splice(i,1);
        this.setState({
            ordersList: ordersList
        });
        console.log(i);
    }
    render() {
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
                        {ordersList.map((order, i) => {
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

export default OrdersList;