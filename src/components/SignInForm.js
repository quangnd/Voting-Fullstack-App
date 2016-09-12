import React from 'react';
import TextInput from '../common/textInput';

export default class SignInForm extends React.Component {
    render() {
        return(
             <div className='container registerForm'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Login form</div>
                            <div className='panel-body'>
                                <form className="form-horizontal">
                                    <TextInput type="text"  name="username" placeholder="Username" label="Username"
                                        value={this.props.user.username}
                                        onChange={this.props.onChange}
                                        error={this.props.errors.username}/>

                                    <TextInput type="password" name="password" placeholder="Password" label="Password"
                                        value={this.props.user.password}
                                        onChange={this.props.onChange}
                                        error={this.props.errors.password}/>


                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <input type="submit" value="Login" className="btn btn-primary" 
                                            onClick={this.props.onLogin} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}