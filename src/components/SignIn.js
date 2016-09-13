import React from 'react';
import SignInForm from './SignInForm';
import UserApi from '../api/userApi';
import Globals from '../common/globals';
import toastr from 'toastr';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {id:'', username:'', password:''},
            errors: [],
        }
        this.setUserState = this.setUserState.bind(this);
        this.login = this.login.bind(this);
        
        toastr.options = {
                'closeButton': true,
                'positionClass': 'toast-bottom-right',
        };
    }

    setUserState(event) {
        var newState = this.state.user;
        var field = event.target.name;
        var value = event.target.value;
        newState[field] = value;
        this.setState({
            user: newState
        });
    }

     userFormIsValid() {
		var formIsValid = true;
		var newErrorState =  this.state.errors;
        newErrorState = {}; //clear any previous errors.


		if (this.state.user.username.length < 3) {
			newErrorState.username = 'Username must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.user.password.length < 3) {
			newErrorState.password = 'Password must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: newErrorState});
		return formIsValid;
	}

    login(event) {
        event.preventDefault();

        let authenticated = false;
        if (!this.userFormIsValid()) {
            return;
        }

        var userExisting = UserApi.validateUser(this.state.user);
        if (userExisting) {
            authenticated = true;
            Globals.setUsername(this.state.user.username);

            toastr.success('Login successfully!!!');
            
            const path = '/polls';
            this.context.router.push(path)
        }
        else {
            toastr.error('Login failed!!!');
        }

        //callback to parent component
        this.props.onAuthenticate(authenticated);

    }

    render() {
        return (
            <SignInForm 
                user={this.state.user}
                onChange={this.setUserState}
                onLogin={this.login} 
                errors={this.state.errors}
            />
        );
    }
}

 SignIn.contextTypes = {
    router: React.PropTypes.object
  };

export default SignIn;