import React from 'react';
import PollView from './PollView';
import PollApi from '../api/pollApi';
import Globals from '../common/globals';
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

        toastr.options = {
            'closeButton': true,
            'positionClass': 'toast-bottom-right',
        };
    }

    componentWillMount() {
        let pollId = this.props.location.query.id;

        if (pollId) {
            this.setState({
                poll: PollApi.getPollById(parseInt(pollId))
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
        //console.log(updatedPoll);
         this.setState({
            poll: updatedPoll
        });
        toastr.success(`You voted for ${votedOption}!`);
    }

    render() {

        return (
            <div className="container registerForm">
                <div className="panel panel-info">
                    <div className="panel-heading">Poll Result</div>
                    <div className="panel-body">
                        <PollView poll={this.state.poll}
                            onChange={this.setStateChange}
                            onVote={this.handleVote}/>
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