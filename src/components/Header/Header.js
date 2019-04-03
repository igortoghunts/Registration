import React from 'react';
import { Link } from 'react-router-dom';


export default props => {
    return (
            <div className="ui inverted menu">
                <Link to={'/register'} className="grey item">Registration</Link>
                <Link to={'/profile'} className="orange item">Profile</Link>
            </div>
    );
};