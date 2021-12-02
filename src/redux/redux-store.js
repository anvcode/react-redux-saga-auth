import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
  applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(sagas)

export default store


