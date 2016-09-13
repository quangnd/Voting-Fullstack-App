import React from 'react';
import { Link } from 'react-router';

class PollList extends React.Component {
    render() {
     
        let pollLink = this.props.polls.map( poll => {
            return <Link key={poll.id} to="/" className="list-group-item">
                        
                        <span className="badge">Options: {poll.options.length}</span>
                         {poll.name}
                    </Link>
           
        });
                 
        return (
            <div className="list-group">
                {pollLink}
            </div>
        )
    }
}

PollList.propTypes = {
    polls: React.PropTypes.array.isRequired
}

export default PollList;