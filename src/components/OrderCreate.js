import React, { Component } from 'react';
import InputField from './InputField';

class OrderCreate extends Component {
    submitFrom = (e) => {
        e.preventDefault();
        console.log("Form submited!");
    }

    render() {
        return (
            <form onSubmit={(e) => this.submitForm(e)}>
                <InputField type="text" label="Username"/>
                <InputField type="text" label="Description"/>
                <InputField type="text" label="Total price"/>
                <InputField type="text" label="Purchase price"/>
                <InputField type="text" label="Address"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default OrderCreate;