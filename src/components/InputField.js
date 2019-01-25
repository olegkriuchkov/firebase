import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';
import isValid from '../validator/validator';
import {errorMessages} from '../validator/errorMessages';

const mapStateToProps = (state) => {
    return {
        inputValues: state.inputValues
    };
}

const mapDispatchToProps = {
};

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false
        }
    }

    showErrorHandler = () => {
        const {name, inputValues} = this.props;
        console.log(isValid(name, inputValues[name]));
        if(isValid(name, inputValues[name])) {
            this.setState({showError: false});
        } else {
            this.setState((state, props) => {
                return {
                    showError: !state.showError
                }
            });
        }
    }

    render() {
        const {type, label, name} = this.props;
        return (
            <div className="form-group">
                <label>{label}</label>
                {label === 'Status'
                    ? <select name={name} onChange={this.props.onChange} className="form-control">
                        <option>New</option>
                        <option>Shipped</option>
                        <option>Accepted</option>
                        <option>Declined</option>
                    </select>
                    : <input 
                        className="form-control" 
                        type={type} 
                        name={name} 
                        onChange={this.props.onChange} 
                        autoComplete="off" 
                        onBlur={this.showErrorHandler}
                    />
                }
                {this.state.showError
                    ? <p className="error">{errorMessages[name]}</p>
                    : <p></p>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);