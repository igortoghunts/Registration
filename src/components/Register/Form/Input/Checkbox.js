import React from 'react';

const checkbox = ({ input, label }) => {
    return (
        <div className="ui checkbox">
            <input type="checkbox" {...input}/>
            <label>{label}</label>
        </div>
    );
};

export default checkbox;
