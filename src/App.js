import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/list/List';
import Users from './components/users/Users';
import Departments from './components/departments/Departments';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <h1>On Call Database</h1>

                <BrowserRouter>
                    <div>
                        <Route path='/list' component={ List } />
                        <Route path='/users' component={ Users } />
                        <Route path='/departments' component={ Departments } />
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
