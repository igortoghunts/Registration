import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './Header/Header';
import Register from './Register/Register';



const App = () => {
    return (
        <div className="ui container">
            <Router>
                <div className="ui segment">
                    <Header />
                    <Register />
                </div>
            </Router>
        </div>
    );
};

export default App;

