import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
	state = {
      	chatTitle: 'Ghetto Slack',
      	users: [
        	{ 
              username: 'IB IDub', 
              input: ''
            }, 
          	{ 
              username: 'RayTed R',
              input: ''
            }
        ],
    	messages: []
    };

  handleChange = (event) => {
  	event.persist();
    const user = parseInt(event.target.getAttribute('data-user'),10);
    this.setState(currentState => {
    	return {
        	users: [
              { 
                username: 'IB IDub', 
                input: (user === 0) ? event.target.value : currentState.users[0].input
              }, 
              { 
                username: 'RayTed R',
                input: (user === 1) ? event.target.value : currentState.users[1].input
              }
        	]
        }
    });
  };

  sendMessage = (event) => {
    event.preventDefault();
  	event.persist();
    const user = parseInt(event.target.getAttribute('data-user'), 10);
    this.setState(currentState => {
    	return {
            users: [
              {
                username: currentState.users[0].username,
                input: (user === 0) ? '' : currentState.users[0].input
              },
              {
                username: currentState.users[1].username,
                input: (user === 1) ? '' : currentState.users[1].input
              }
            ],
          	messages: [
          			...currentState.messages,
          			{
                    	username: currentState.users[user].username,
                      	text: currentState.users[user].input
                    }
        		  ]
        }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
    		user={0}
			input={this.state.users[0].input}
    		chatData={this.state}
			handleChange={this.handleChange}
			sendMessage={this.sendMessage}
			isDisabled={this.isDisabled}
    	  />
		  <ChatWindow
    		user={1}
			input={this.state.users[1].input}
    		chatData={this.state}
			handleChange={this.handleChange}
			sendMessage={this.sendMessage}
			isDisabled={this.isDisabled}
    	  />
		</div>
      </div>
    );
  }
}

export default App;
