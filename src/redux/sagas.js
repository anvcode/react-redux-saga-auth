import {call, put, takeEvery} from 'redux-saga/effects'
import {actionAuthSuccess} from './auth-reducer'
import {hideAlert, showAlert, setNews} from './app-reducer'
import {authService} from '../api/api'
import {getNews} from '../api/api'

export default function* sagaWatcher() {
  yield takeEvery('AUTH_REQUEST', authWorker)
  yield takeEvery('SHOW_ALERT', hideAlertWorker)
  yield takeEvery('GET_NEWS', setNewsWorker)
}

function* authWorker({payload}) {
  try {
    const {username, password} = payload
    yield call(authService, username, password)
    yield put(actionAuthSuccess(username))
  } catch (error) {
    yield put(showAlert(error.message))
  }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* hideAlertWorker() {
  yield delay(3000)
  yield put(hideAlert())
}

function* setNewsWorker() {
  const data = yield call(getNews)
  yield put(setNews(data.articles))
}





