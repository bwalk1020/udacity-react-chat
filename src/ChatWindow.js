import React, {Component} from 'react';

class ChatWindow extends Component {
	render() {
      this.user = parseInt(this.props.user, 10);
      this.input = this.props.input;
      this.users = this.props.chatData.users;
      this.title = this.props.chatData.chatTitle;
      this.messages = this.props.chatData.messages;
    	return (
        	<div className="chat-window">
              <h2>{this.title}</h2>
              <div className="name sender">{this.users[this.user].username}</div>

              <ul className="message-list">
                {this.messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === this.users[this.user].username ? 'message sender' : 'message recipient'
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>

              <div>
                <form className="input-group">
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter your message..." 
					  data-user={this.user}
                      value={this.users[this.user].input} 
                      onChange={this.props.handleChange}
                  />
                  <div className="input-group-append">
                    <button 
						className="btn submit-button" 
						disabled={!this.users[this.user].input} 
						data-user={this.user} 
						onClick={this.props.sendMessage}
					>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
          </div>
        )
    }
}

export default ChatWindow;