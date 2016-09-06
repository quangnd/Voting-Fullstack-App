import React from 'react';
import { Link } from 'react-router';

class UserList extends React.Component {
    render() {
        let createUserRow = (user) => <tr key={user.id}>
            <td>
                <Link to={{ pathname: '/register', query: { id: user.id } }}>{user.id}</Link>
            </td>
            <td>{user.username}</td>
            <td>{user.password}</td>
        </tr>

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(createUserRow, this) }
                    </tbody>
                </table>
            </div>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
}

export default UserList;