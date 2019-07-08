const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
const SET_POSTS = "SET-POSTS";
const CLEAN_MESSAGES = "CLEAN-MESSAGES";

// let initialState = {
//   messages: [
//     {id: 1, name: 'Dimych', message: 'Hi'},
//     {id: 2, name: 'Andrey', message: 'How is your project?'},
//     {id: 3, name: 'Sveta', message: 'Yoy'},
//     {id: 4, name: 'Sasha', message: 'Yoy'},
//     {id: 5, name: 'Victor', message: 'Yoy'}
//   ],
//   newMessageBody: ""
// };

let initialState = {
  users: [],
  newMessage: ""
};

const postsInfoReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessage: action.body
    };
    case SEND_MESSAGE:
      let body = state.newMessage;
      return {
        ...state,
        newMessage: '',
        users: [...state.users, {id: 6, name: 'Nikita', message: body}]
      };
    case SET_POSTS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    case CLEAN_MESSAGES: {
      return {...state, users: []}
    }
    default:
      return state;
  }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const setUsersCreator = (users) => ({type: SET_POSTS, users});
export const cleanMessageCreator = () => ({type: CLEAN_MESSAGES});

export default postsInfoReducer;