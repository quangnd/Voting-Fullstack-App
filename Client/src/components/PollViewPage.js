import React from 'react';
import PollView from './PollView';
import PollApi from '../api/pollApi';
import toastr from 'toastr';

class PollViewPage extends React.Component {
    constructor() {
        super();

        this.state = {
            poll: { id: '', name: '', options: [] },
            errors: []
        }

        this.setStateChange = this.setStateChange.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        toastr.options = {
            'closeButton': true,
            'positionClass': 'toast-bottom-right',
        };
    }

    componentWillMount() {
        let pollId = this.props.location.query.id;

        if (pollId) {
            this.setState({
                poll: PollApi.getPollById(parseInt(pollId, 10))
            });
        }
    }

    setStateChange(event) {
        var newState = this.state.poll;
        var field = event.target.name;
        var value = event.target.value;
        newState[field] = value;
        console.log(newState);
        this.setState({
            poll: newState
        });
    }

    handleVote(event) {
        event.preventDefault();

        let votedOption = this.state.poll.pollOptions;
        let updatedPoll = PollApi.updateVoteByPollIdAndOption(this.state.poll.id, votedOption);
        //console.log("Updated poll hien tai la:" + JSON.stringify(updatedPoll));
        this.setState({
            poll: updatedPoll
        });
        toastr.success(`You voted for ${votedOption}!`);
    }

    handleDelete(event) {
        
        PollApi.deletePoll(this.state.poll.id);
        toastr.success('Poll was deleted!!!');

        const path = '/polls';
        this.context.router.push(path)
    }

    handleEdit(event) {
        event.preventDefault();

        const path = '/poll/edit?id=' + this.state.poll.id;
        this.context.router.push(path)
    }

    render() {

        return (
            <div className="container registerForm">
                <div className="panel panel-info">
                    <div className="panel-heading">Poll Result</div>
                    <div className="panel-body">
                        <PollView poll={this.state.poll}
                            onChange={this.setStateChange}
                            onVote={this.handleVote}
                            onEdit={this.handleEdit}
                            onDelete={this.handleDelete}
                            loggedIn={this.props.loggedIn}/>


                    </div>
                </div>
            </div>

        );

    }
}

PollViewPage.contextTypes = {
    router: React.PropTypes.object
};

export default PollViewPage;