// types
export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
export const GET_NEWS = 'GET_NEWS'
export const SET_NEWS = 'SET_NEWS'

const initialState = {
  alert: null,
  news: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: null
      }
    case SET_NEWS:
      return {
        ...state,
        news: action.payload
      }
    default:
      return state
  }
}

// actions
export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function setNews(data) {
  return {
    type: SET_NEWS,
    payload: data
  }
}

export function getNews() {
  return {
    type: GET_NEWS
  }
}

export default appReducer
