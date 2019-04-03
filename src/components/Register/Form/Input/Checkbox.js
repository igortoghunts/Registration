import React from 'react';

const checkbox = ({ input, label }) => {
    return (
        <div className="ui checkbox">
            <input type="checkbox" />
            <label>{label}</label>
        </div>
    );
};

export default checkbox;
