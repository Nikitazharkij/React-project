const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    {id: 1, name: 'Dimych', message: 'Hi'},
    {id: 2, name: 'Andrey', message: 'How is your project?'},
    {id: 3, name: 'Sveta', message: 'Yoy'},
    {id: 4, name: 'Sasha', message: 'Yoy'},
    {id: 5, name: 'Victor', message: 'Yoy'}
  ],
  newMessageBody: ""
};

const postsInfoReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
    };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, name: 'Nikita', message: body}]
      };
    default:
      return state;
  }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default postsInfoReducer;