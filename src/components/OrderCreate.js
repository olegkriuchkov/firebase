import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import {createOrder} from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';
import {setInputValues} from '../actions/actions';

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = {
    createOrder,
    setInputValues
};

class OrderCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderNum: '',
            username: '',
            description: '',
            status: '',
            totalPrice: '',
            purchasePrice: '',
            address: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const {createOrder} = this.props;
        createOrder(this.state);
    }

    inputChange = (e) => {
        const {setInputValues} = this.props;
        this.setState({
            [e.target.name]: e.target.value
        }, () => setInputValues(this.state));
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="create-order">
                <InputField type="text" label="orderNum" name='orderNum' onChange={this.inputChange}/>
                <InputField type="text" label="Username" name='username' onChange={this.inputChange}/>
                <InputField type="text" label="Description" name='description' onChange={this.inputChange}/>
                <InputField type="text" label="Status" name='status' onChange={this.inputChange}/>
                <InputField type="text" label="Total price" name='totalPrice' onChange={this.inputChange}/>
                <InputField type="text" label="Purchase price" name='purchasePrice' onChange={this.inputChange}/>
                <InputField type="text" label="Address" name='address' onChange={this.inputChange}/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreate);