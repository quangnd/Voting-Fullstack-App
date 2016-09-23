import React, { Component } from 'react';
import '../../lib/bootstrap/css/bootstrap.css';
import '../../node_modules/toastr/build/toastr.css';
import '../index.css';

import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    }

    this.onAuthenticate = this.onAuthenticate.bind(this);
  }

  onAuthenticate(auth) {
    this.setState({
      authenticated: auth
    }) 
  }

  //React.cloneElement only work with one child. See this link to find out more: //http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

  render() {
       return (
             <div>
                <Header onAuthenticate={this.onAuthenticate} loggedIn={this.state.authenticated}/>
                {React.cloneElement(this.props.children, { onAuthenticate: this.onAuthenticate, loggedIn: this.state.authenticated })}           
                <Footer/>
            </div>
        );
  }
}

export default App;
