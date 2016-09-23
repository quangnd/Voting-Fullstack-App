import React from 'react';
import NewPollForm from './NewPollForm';
import PollApi from '../api/pollApi';
import Globals from '../common/globals';
import toastr from 'toastr';

class NewPoll extends React.Component {
    constructor() {
        super();

        this.state = {
            poll: { id: '', name: '', options: '' },
            errors: [],
            isEdit: false,
            originalOptions: []
        }

        this.setPollState = this.setPollState.bind(this);
        this.savePoll = this.savePoll.bind(this);

        toastr.options = {
            'closeButton': true,
            'positionClass': 'toast-bottom-right',
        };
    }

    componentWillMount() {
        let pollId = this.props.location.query.id;

        if (pollId) {
            let editingPoll = PollApi.getPollById(parseInt(pollId, 10));
            let originalOptions = editingPoll.options;
            let optionList = '';
            editingPoll.options.forEach(function (option) {
                optionList += option.option + '\n';
            });

            editingPoll.options = optionList;

            this.setState({
                poll: editingPoll,
                isEdit: true,
                originalOptions
            });
        }
    }

    setPollState(event) {
        let newState = this.state.poll;
        let field = event.target.name;
        let value = event.target.value;
        newState[field] = value;

        console.log(newState);
        this.setState({
            poll: newState
        })
    }

    newPollFormIsValid() {
        var formIsValid = true;
        var newErrorState = this.state.errors; //clear any previous errors.

        newErrorState = {};
        if (this.state.poll.name.length < 3) {
            newErrorState.name = 'Poll name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.poll.options.length < 3) {
            newErrorState.password = 'Poll options must be at least 3 characters.';
            formIsValid = false;
        }

        //console.log(this.state.errors);
        this.setState({ errors: newErrorState });
        return formIsValid;
    }

    savePoll(event) {
        event.preventDefault();

        if (!this.newPollFormIsValid()) {
            return;
        }

        let getOptions = this.state.poll['options'].split('\n');

        if (getOptions[getOptions.length - 1] === '')
            getOptions.pop();

        let newPollOptions = getOptions.toString().split(',');
        let newPoll = {};
        let path = '';
        if (!this.state.isEdit) {
            let options = [];
            newPollOptions.forEach((item) => options.push({ option: item, votes: 0 }));

            newPoll = {
                name: this.state.poll.name,
                options: options,
                createdBy: Globals.getUsername()
            }

            //console.log("name new state: " + JSON.stringify(newPoll));
            PollApi.savePoll(newPoll);
            toastr.success('Poll Saved!');

            //redirect using react-router context
            path = '/polls';
        }
        else {
            let originalArr = [];
            this.state.originalOptions.forEach(function (option) {
                originalArr += option.option + ',';
            })
          
            //get added elements
            newPollOptions = newPollOptions.filter(function (option) {
                return originalArr.indexOf(option) < 0
            });

            let addedOptions = this.state.originalOptions;
            newPollOptions.forEach((item) => addedOptions.push({ option: item, votes: 0 }));

            newPoll = {
                id: this.state.poll.id,
                name: this.state.poll.name,
                options: addedOptions,
                createdBy: Globals.getUsername()
            }

            path = '/polls?username=' + Globals.getUsername();
        }

        PollApi.savePoll(newPoll);
        toastr.success('Poll Saved!');

        this.context.router.push(path)
    }

    render() {
        if (!this.props.loggedIn) {
            return (

                <div className="container registerForm">
                    You must login to continue...
                </div>
            )
        }
        else {
            return (
                <NewPollForm
                    onSave={this.savePoll}
                    onChange={this.setPollState}
                    poll={this.state.poll}
                    errors={this.state.errors}/>
            );
        }
    }
}

NewPoll.contextTypes = {
    router: React.PropTypes.object
};

export default NewPoll;