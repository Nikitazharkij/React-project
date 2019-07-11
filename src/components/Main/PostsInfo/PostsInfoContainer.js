import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
  setUsersCreator } from './../../../redux/postsInfo-reducer'
import PostsInfo from './PostsInfo';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    usersMessages: state.postsInfoPage
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
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    }
  }
}

const PostsInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PostsInfo);

export default PostsInfoContainer;