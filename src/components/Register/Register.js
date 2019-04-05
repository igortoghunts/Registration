import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './Form/Form';
import { auth } from '../../store/ations';
import { checkbox } from '../../store/ations';

class Register extends Component{

    onSubmit = (formValues) => {
        if(typeof formValues.checkbox === undefined) formValues.checkbox = false;
        this.props.checkbox(formValues.checkbox);
        this.props.auth(formValues);
    }

    render(){
        return (
            <div className="ui placeholder segment">
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state,
        checked: state.checked
    }
};

const mapDispatchToProps =  { checkbox, auth };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

