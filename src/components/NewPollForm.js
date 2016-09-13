import React from 'react';
import TextInput from '../common/textInput';
import TextArea from '../common/textArea';

export default class NewPollForm extends React.Component {
    render() {
        return (
            <div className='container registerForm'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='panel panel-info'>
                            <div className='panel-heading'>Create new poll</div>
                            <div className='panel-body'>
                                <form className="form-horizontal">
                                    <TextInput type="text" name="name" placeholder="Name" label="Enter name"
                                        value={this.props.poll.name}
                                        onChange={this.props.onChange}
                                        error={this.props.errors.pollName} />

                                    <TextArea rows="5" name="options" placeholder="Options seperated by line" label="Enter Options"
                                        value={this.props.poll.options}
                                        onChange={this.props.onChange}
                                        error={this.props.errors.pollOptions}/>


                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <input type="submit" value="Create" className="btn btn-primary" 
                                            onClick={this.props.onSave} />
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