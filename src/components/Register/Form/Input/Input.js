import React from 'react';

const input = ({ input, label,type }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} onChange={input.onChange} defaultValue="" autoComplete="" />
        </div>
    );
};

export default input;
