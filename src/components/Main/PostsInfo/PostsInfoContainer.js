import { sendMessageCreator, updateNewMessageBodyCreator } from './../../../redux/postsInfo-reducer'
import PostsInfo from './PostsInfo';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsInfoPage: state.postsInfoPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

const PostsInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PostsInfo);

export default PostsInfoContainer;