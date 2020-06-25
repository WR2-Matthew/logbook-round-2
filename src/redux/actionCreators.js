import { GET_JUMPER } from './constraints'

export function setUser(user_id, username) {
  return {
    type: GET_JUMPER,
    payload: {
      user_id: user_id,
      username: username
    }
  }
}