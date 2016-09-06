import React from 'react';

import UserApi from '../api/userApi';
import UserList from './UserList';

class UserListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        }

    }

    componentDidMount() {

        this.setState({
            users: UserApi.getAllUsers()
        })

    }

    render() {
        return (
            <div className="container registerForm">
                <h2>User list</h2>
                <br/>        
                <UserList users={this.state.users}/>
            </div>
        )
    }
}

export default UserListPage;