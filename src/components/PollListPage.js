import React from 'react';
import PollApi from '../api/pollApi';
import PollList from './PollList';

class PollListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            polls: []
        }
    }

    getStateFromStores(props) {
        let username = props.location.query.username;

        if (username && props.loggedIn) {
            return {
                polls: PollApi.getAllPollsByUsername(props.location.query.username)
            };
        }

        return { polls: PollApi.getAllPolls() };

    }

    //Run after render
    componentDidMount() {
        this.setState(this.getStateFromStores(this.props));
    }

    //Run when receive new props
    componentWillReceiveProps(nextProps) {
        this.setState(this.getStateFromStores(nextProps));
    }

    render() {
        return (
            <div className="container registerForm">
                <div className="panel panel-info">
                    <div className="panel-heading">Availabel Poll list</div>
                    <div className="panel-body">
                        <PollList polls={this.state.polls}/>
                    </div>
                </div>
            </div>
        )

    }
}

export default PollListPage;