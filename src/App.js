import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import List from './components/list/List';
import Users from './components/users/Users';
import Departments from './components/departments/Departments';
import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <h1>On Call Database</h1>

                    <ul className="nav nav-tabs">
                        <li><NavLink to="/list" activeClassName="active">View Current On Call</NavLink></li>
                        <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                        <li><NavLink to="/departments" activeClassName="active">Departments</NavLink></li>
                    </ul>

                    <Switch>
                        <Route path='/list' component={ List } />
                        <Route path='/users' component={ Users } />
                        <Route path='/departments' component={ Departments } />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
