import React from 'react'; 
import UserApi from '../api/userApi';
import RegisterForm from './RegisterForm';
import toastr from 'toastr';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            user: { id: '', username: '', password: '' },
            errors: []
        }

        this.setUserState = this.setUserState.bind(this);
        this.saveUser = this.saveUser.bind(this);

    }

    setUserState(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        this.setState({
            user: this.state.user
        });
    }

    authorFormIsValid() {
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
    saveUser(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        UserApi.saveUser(this.state.user);
        toastr.success('User Saved!');
        //redirect using react-router context
        const path = '/users';
        this.context.router.push(path)
    }

    render() {
        return (
            <RegisterForm user={this.state.user}
                onChange={this.setUserState}
                onSave={this.saveUser} 
                errors={this.state.errors} />
        );
    }
}

 Register.contextTypes = {
    router: React.PropTypes.object
  };

export default Register;