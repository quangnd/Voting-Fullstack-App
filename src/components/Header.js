import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
     constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

     
    logout() {
        this.props.onAuthenticate(false);
    }

    render() {
        let loggedIn = this.props.loggedIn;
        let linkSignIn =  <Link to="/signin">Sign in</Link>;
        let linkUserList = '';
        let linkRegister = <Link to="/register">Register</Link>;;
        if (loggedIn) {
            linkSignIn = <Link to="/" onClick={this.logout}>Logout</Link>;
            linkUserList = <Link to="/users">User List</Link>;
            linkRegister = '';
        }

        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Project name</Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right hamburger-dropdown">
                                <li className="hidden-xs">
                                    {linkUserList}
                                </li>
                                <li className="hidden-xs">
                                    {linkSignIn}
                                </li>
                                <li className="hidden-xs">
                                    {linkRegister}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;