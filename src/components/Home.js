import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Welcome you!</h1>
                        <p>Please create any polls you like and see the other's votes</p>
                        <p>
                            {/*<a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo; </a>*/}
                            <Link to="/polls" className="btn btn-primary btn-lg" role="button">See polls</Link>
                        </p>
                    </div>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <h2>Live results</h2>
                            <p>We use nice graph to display result, take it easy to understand and share.</p>
                            {/*<p><a className="btn btn-default" href="#" role="button">View details &raquo; </a></p>*/}
                        </div>
                        <div className="col-md-4">
                            <h2>Work everywhere</h2>
                            <p>Tablet, mobile, desktop...this application works everywhere you're staying.</p>
                            {/*<p><a className="btn btn-default" href="#" role="button">View details &raquo; </a></p>*/}
                        </div>
                        <div className="col-md-4">
                            <h2>Social integration</h2>
                            <p>You can login with Twitter account. Create and share your poll with the rest of the world. </p>
                            {/*<p><a className="btn btn-default" href="#" role="button">View details &raquo; </a></p>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;