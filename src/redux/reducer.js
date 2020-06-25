import { GET_JUMPER } from "./constraints";

const initialState = {
  username: '',
  user_id: null,
  jumps: [],
  jump: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_JUMPER:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}