import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkUser } from '../../store/ations';
import Form from './Form/Form';

class Register extends Component{

    state = {
        user: ""
    }

    onSubmit = () => {
        this.props.checkUser(this.props.user.values);
    }

    // state = {
    //     email: ''
    //   }
    
    //   handleSubmit = () => {
    //     this.props.addUser(this.state.email);
    //   }
    

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
        user: state.formReducer.userInfo
    }
};

export default connect(mapStateToProps,{ checkUser })(Register);