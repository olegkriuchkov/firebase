import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {type, label} = this.props;

        return (
            <div>
                <label>{label}</label>
                <input type={type}/>
            </div>
        )
    }
}

export default InputField;