import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
  setUsersCreator } from './../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    usersMessages: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    setMessages: (users) => {
      dispatch(setUsersCreator(users));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;