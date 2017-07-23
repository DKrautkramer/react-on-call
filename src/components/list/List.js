import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div className="container">
                <h2>Active List</h2>

                <div className="form-group form-inline">
                    <label htmlFor="callListSort">Sort By:</label>
                    <select id="callListSort" className="form-control">
                        <option value="dept">Department</option>
                        <option value="type">Type</option>
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="email">Email</option>
                    </select>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped">
                        <caption></caption>
                        <thead>
                        <tr>
                            <th>Dept. Name</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default List;