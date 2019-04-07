import React from 'react';

const input = ({ input, label,type, meta: {error, touched, warning}}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} {...input} autoComplete="" />
            {touched && ((error && <span >{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};

export default input;
