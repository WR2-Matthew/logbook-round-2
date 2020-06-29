import { GET_JUMPER, CREATE_JUMP, RETRIEVE_JUMPS } from './constraints'

export function setUser(user_id, username) {
  return {
    type: GET_JUMPER,
    payload: {
      user_id: user_id,
      username: username
    }
  }
}

export function createJump(data) {
  return {
    type: CREATE_JUMP,
    payload: {
      jumps: data
    }
  }
}

export function getJumps(data) {
  return {
    type: RETRIEVE_JUMPS,
    payload: {
      jumps: data
    }
  }
}