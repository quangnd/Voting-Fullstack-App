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

    componentWillMount() {
        let userId = this.props.location.query.id;
        //console.log(this.props);
        if (userId) {
            this.setState({
                user: UserApi.getUserById(userId)
            });
        }
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
		var newErrorState =  this.state.errors; //clear any previous errors.

        newErrorState = {};
		if (this.state.user.username.length < 3) {
			newErrorState.username = 'Username must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.user.password.length < 3) {
			newErrorState.password = 'Password must be at least 3 characters.';
			formIsValid = false;
		}

        console.log(this.state.errors);
		this.setState({errors: newErrorState});
		return formIsValid;
	}
    saveUser(event) {
        event.preventDefault();

        if (!this.userFormIsValid()) {
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