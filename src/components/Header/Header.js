import React from 'react';
import { NavLink } from 'react-router-dom';


export default props => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted  secondary pointing menu">
                <NavLink to={'/register'} className=" item" activeClassName="active" >Registration</NavLink>
                <NavLink to={'/product'} className="item">Product</NavLink>
            </div>
        </div>
    );
};