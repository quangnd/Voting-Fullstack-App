import React from 'react';
import NewPollForm from './NewPollForm';
import PollApi from '../api/pollApi';
import toastr from 'toastr';

class NewPoll extends React.Component {
    constructor() {
        super();

        this.state = {
            poll: { id: '', name: '', options: [] },
            errors: []
        }
    }
    render() {
        return (

            <NewPollForm
                poll={this.state.poll}
                errors={this.state.errors}/>

        );
    }
}

export default NewPoll;