import React from 'react';

class Register extends React.Component {
    render() {
        return (
      
            <div className='container registerForm'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Create new account</div>
                            <div className='panel-body'>
                                <form>
                                    <div className='form-group'>
                                        <label className='control-label'>Character Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value='' autoFocus/>
                                        <span className='help-block'></span>
                                    </div>
                                    <div className='form-group'>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='female' value='Female' defaultChecked='true'/>
                                            <label htmlFor='female'>Female</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='male' value='Male' defaultChecked='false'/>
                                            <label htmlFor='male'>Male</label>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Register;