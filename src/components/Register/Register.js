import React, { Component } from 'react';
import { connect } from 'react-redux';

import{  createUser } from '../../store/ations/index';
import Form from './Form/Form';

class Register extends Component{
    onSubmit = () => {
        console.log(this.props)
    }

    render(){
        // console.log(this.props.user.userInfo)
        return (
            <div>
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.formReducer
    }
};

export default connect(mapStateToProps,{ createUser })(Register);