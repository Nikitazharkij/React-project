import React, { Component } from 'react';

class PostsInfo extends Component {
  constructor(props) {
  super(props);
  this.onSendMessageClick = this.onSendMessageClick.bind(this);
  this.onNewMessageChange = this.onNewMessageChange.bind(this);
}

  componentDidMount() {
    this.props.cleanMessages();
    this.props.setUsers(this.props.data.messages);
  }

  onSendMessageClick() {
    this.props.sendMessage();
  }

  onNewMessageChange(e) {
    let body = e.target.value;
    this.props.updateNewMessageBody(body);
  }

  render() {
 let message = this.props.usersMessages.newMessage;
    return (
      <div>
        {this.props.usersMessages.users.map(postElement =>
          <div key={postElement.id}>
            <h2>{postElement.name}</h2>
            <h2>{postElement.message}</h2>
          </div>
        )}
          <div>
            <textarea value = {message}
              onChange={this.onNewMessageChange}
              placeholder="Enter your message">
            </textarea>
          </div>
          <div><button onClick={this.onSendMessageClick}>Send</button></div>
      </div>
    )
  }
}

export default PostsInfo;
