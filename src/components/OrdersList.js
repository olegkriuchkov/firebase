import React, { Component } from 'react';
import TableRow from './TableRow';
import firebase from 'firebase';

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
    }
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyBP48W31HLmu-dh0EGmhjpBd8sVMrHPVYM",
            authDomain: "smiss-firebase-oleg.firebaseapp.com",
            databaseURL: "https://smiss-firebase-oleg.firebaseio.com",
            projectId: "smiss-firebase-oleg",
            storageBucket: "smiss-firebase-oleg.appspot.com",
            messagingSenderId: "478421274522"
          };
        firebase.initializeApp(config);
        firebase.database().ref('orders').once('value').then((data)=>{
            console.log(data);
        })
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