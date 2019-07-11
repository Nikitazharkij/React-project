import React, { Component } from 'react';
import style from './Messages.module.sass';

class Messages extends Component {
  constructor(props) {
  super(props);
  this.onSendMessageClick = this.onSendMessageClick.bind(this);
  this.onNewMessageChange = this.onNewMessageChange.bind(this);
}

  componentDidMount() {
    this.props.setMessages(this.props.data);
  }

  onSendMessageClick() {
    this.props.sendMessage();
  }

  onNewMessageChange(e) {
    let body = e.target.value;
    this.props.updateNewMessageBody(body);
  }

  render() {
    let currentMessageText = this.props.usersMessages.newMessage;

    let usersMessages = this.props.usersMessages.users.map(messageUserElement =>
      <div key={messageUserElement.id} className="row">
        <div className={`col-12 ${style.messageBox}`}>
          <h2>{messageUserElement.name}</h2>
          <p>{messageUserElement.message}</p>
        </div>
      </div>
    )

    return (
      <div className="container">
        {usersMessages}
        <div className={`row ${style.textAreaBox}`}>
          <div className="col-12">
            <textarea value = {currentMessageText}
              onChange={this.onNewMessageChange}
              placeholder="Enter your message">
            </textarea>
          </div>
        </div>
          <div className={`row ${style.buttonBox}`} >
            <div className="col-12">
              <button onClick={this.onSendMessageClick} type="button" className="btn btn-primary btn-lg">Send</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Messages;
