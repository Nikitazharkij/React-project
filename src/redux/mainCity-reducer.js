const SET_DATA = "SET-DATA";

let initialState = {
  data: []
};

const mainCityReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DATA: {
      return {...state, data}
    }
    default:
      return state;
  }
}

export const setData = (data) => ({type: SET_DATA, data})

export default mainCityReducer;