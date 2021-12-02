import {loadState, saveState} from './localStorage'

// types
export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const LOGOUT = 'LOGOUT'

let initialState = loadState() || {
  isAuth: false,
  username: ''
}

const authReducer = (state = initialState, action) => { // получает state и action из стора, после диспатча AC ниже
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

// actions
export const actionAuthRequest = (username, password) => {
  return {
    type: AUTH_REQUEST,
    payload: {username, password}
  }
}

export const actionAuthSuccess = (username) => {
  saveState(true, username)
  return {
    type: AUTH_SUCCESS,
    payload: {username}
  }
}

export const actionLogout = () => {
  saveState(false, '')
  return {
    type: LOGOUT
  }
}

export default authReducer
