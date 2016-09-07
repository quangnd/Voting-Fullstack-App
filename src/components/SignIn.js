import React from 'react';
import SignInForm from './SignInForm';
import UserApi from '../api/userApi';
import toastr from 'toastr';
class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {id:'', username:'', password:''},
            errors: []
        }
        this.setUserState = this.setUserState.bind(this);
        this.login = this.login.bind(this);
    }

    setUserState(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        this.setState({
            user: this.state.user
        });
    }

     userFormIsValid() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.user.username.length < 3) {
			this.state.errors.username = 'Username must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.user.password.length < 3) {
			this.state.errors.password = 'Password must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	}

    login(event) {
        event.preventDefault();

        if (!this.userFormIsValid()) {
            return;
        }

        var userExisting = UserApi.validateUser(this.state.user);
        if (userExisting) {
            toastr.success('Login successfully!!!');
        }
        else {
            toastr.success('Login failed!!!');
        }

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

export default SignIn;