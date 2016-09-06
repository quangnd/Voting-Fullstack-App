import React from 'react';

class UserList extends React.Component {
    render() {
        let createUserRow = (user) => <tr key={user.id}>
            <td>{user.id}</td>
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