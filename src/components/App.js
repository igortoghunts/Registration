import React from 'react';
import { Route } from 'react-router-dom';
 
import Header from './Header/Header';
import Register from './Register/Register';



const App = () => {
    return (
        <div className="ui container">
            <Header />
            <Route path="/register" component={Register}/>
        </div>
    );
};

export default App;

