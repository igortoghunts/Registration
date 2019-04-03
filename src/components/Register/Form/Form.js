import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Checkbox from './Input/Checkbox';
import Input from './Input/Input';

class formValues  extends Component {
    
    render(){
        return (            
            <div className="ui four column grid segment">
                <div className="ui segment inverted">
                    <form className="ui  form " onSubmit={this.props.handleSubmit(this.props.onSubmit)}> 
                            <div className="">
                                    <div className="field">
                                        <Field name="email" type="email" label="Email" component={Input} />
                                    </div>
                                    <div className="field">
                                        <Field name="userName" type="text" label="Username" component={Input} />
                                    </div>
                                    <div className="field">
                                        <Field name="password" type="password" label="Password" component={Input} />
                                    </div>
                                    <div className="field">
                                        <Field name="checkbox" label="Remember Me" component={Checkbox} />
                                    </div>
                                    <button className="ui submit button">Submit</button>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default reduxForm({
    form: 'userInfo'
})(formValues);