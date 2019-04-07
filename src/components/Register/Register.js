import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Form from './Form/Form';
import { auth } from '../../store/ations';


class Register extends Component{

    onSubmit = (formValues) => {
        if(!formValues.checkbox){
            formValues.checkbox = false;
        }
        if(formValues.checkbox){
            console.log(this.props.history)
        }
        this.props.auth(formValues);
    }
    
    render(){
        
        if(this.props.error){
            return <div>{this.props.error.message}</div>
        }
        if(this.props.loading){
            return <div>LOADING...</div>
        }
        return (
            <div className="ui placeholder segment">
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token,
        user: state.auth.user,
        checked: state.auth.checkbox
    }
};

const mapDispatchToProps =  { auth }
export default connect(mapStateToProps, mapDispatchToProps)(Register);




