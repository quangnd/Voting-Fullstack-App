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

    componentDidMount() {
        this.setState({
            polls: PollApi.getAllPolls()
        })
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