import React from 'react';

const PostsInfo = (props) => { 

  let state = props.postsInfoPage;  

  let postsElements = state.messages.map(postElement =>
    <div key={postElement.id}>
      <h2>{postElement.name}</h2>
      <h2>{postElement.message}</h2>
    </div>
    )
    
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div>
      <div>{postsElements}</div>
        <div>
          <textarea value = {newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message">
          </textarea>
        </div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
    </div>
  )
}

export default PostsInfo;
