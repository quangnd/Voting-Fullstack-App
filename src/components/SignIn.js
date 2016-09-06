import React from 'react';

class SignIn extends React.Component {
    render() {
        return (
            <div className="container registerForm">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="panel panel-default">
                            <div className="panel-heading">Sign in</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                                        </div>
                                    </div>
                            
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-default">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;