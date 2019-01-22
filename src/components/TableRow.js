import React, {Component} from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {order, deleteOrder, rowNumber} = this.props;
        return (
            <tr>
                <td>{order.ordNum}</td>
                <td>{order.username}</td>
                <td>{order.description}</td>
                <td>
                    <select>
                        <option>New</option>
                        <option>Shipped</option>
                        <option>Accepted</option>
                        <option>Decline</option>
                    </select>
                </td>
                <td>{order.totPrice}</td>
                <td>{order.purPrice}</td>
                <td>{order.address}</td>
                <td>{order.createdAt}</td>
                <td><button type="button" className="btn btn-outline-danger" onClick={() => deleteOrder(rowNumber)}>Delete order</button></td>
            </tr>
        )
    }
}

export default TableRow;