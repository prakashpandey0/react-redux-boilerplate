import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'
import {successMessage} from './actions/messageAction'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  onClick = () => {
    this.props.successMessage()
  }

  render() {
    const {message} = this.props.messageShow
    console.log(message)
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.onClick}>click me!</button>

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => (  {
  messageShow: state.messageShow
})
export default connect(mapStateToProps, {successMessage})(App);
