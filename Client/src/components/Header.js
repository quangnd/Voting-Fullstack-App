import React from 'react';
import {Link} from 'react-router';
import Globals from '../common/globals';

class Header extends React.Component {
     constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

    logout() {
        Globals.setUsername('');
        this.props.onAuthenticate(false);
    }

    render() {
        let loggedIn = this.props.loggedIn; 
        let linkSignIn =  <Link to="/signin"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> &nbsp; Sign in</Link>;
        //let linkUserList = '';
        let linkRegister = <Link to="/register"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp; Register</Link>;
        let linkNewPoll = '';
        let linkMyPolls = '';
        let username = '';
        if (loggedIn) {
            let currentUsername = Globals.getUsername();
            linkSignIn = <Link to="/" onClick={this.logout}> <span className="glyphicon glyphicon-off" aria-hidden="true"></span> &nbsp; Logout</Link>;
           // linkUserList = <Link to="/users">User List</Link>;
            linkRegister = '';
            linkNewPoll = <Link to="/poll/new"><span className="glyphicon glyphicon-fire" aria-hidden="true"></span> &nbsp; New poll</Link>;
            linkMyPolls = <Link to={{ pathname: '/polls', query: { username: currentUsername } }}> <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> &nbsp; My polls</Link>;
            username = <a href='#'> Hi, {currentUsername}</a>;
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
                            <Link to="/" className="navbar-brand"><span className="glyphicon glyphicon-apple" aria-hidden="true"></span> &nbsp; Mun's voting app</Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right hamburger-dropdown">
                                {/*
                                <li className="hidden-xs">
                                    {linkUserList}
                                </li>
                                */}
                                <li className="hidden-xs"> 
                                    {username}
                                </li>
                                <li className="hidden-xs">
                                   
                                    <Link to="/polls">
                                         <span className="glyphicon glyphicon-list" aria-hidden="true"></span> &nbsp; 
                                            Poll list
                                    </Link>
                                </li>
                                <li className="hidden-xs">
                                    {linkNewPoll}
                                </li>
                                    <li className="hidden-xs">
                                    {linkMyPolls}
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