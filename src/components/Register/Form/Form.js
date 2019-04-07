import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Checkbox from './Input/Checkbox';
import Input from './Input/Input';

const formValues = props =>  {
    return (            
            <div className="ui four column grid segment">
                <div className="ui segment inverted">
                    <form className="ui inverted form " onSubmit={props.handleSubmit(props.onSubmit)}> 
                            <div className="">
                                    <div className="field">
                                        <Field name="email" type="email" label="Email" component={Input}  />
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
};

const validate = values => {
    const errors = {}
    if (!values.userName) {
      errors.userName = 'Required'
    } else if (values.userName.length < 2) {
      errors.userName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'Minimum be 6 characters or more'
    }
    return errors
  }

export default reduxForm({
    form: 'userInfo',
})(formValues);