import React, { Component } from 'react';
import List from './components/list/List';
import Users from './components/users/Users';
import Departments from './components/departments/Departments';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>On Call Database</h1>

                <List></List>
                <hr/>
                <Users></Users>
                <hr/>
                <Departments></Departments>

            </div>
        );
    }
}

export default App;
