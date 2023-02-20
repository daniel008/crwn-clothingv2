import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sageMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
  process.env.NODE_ENV === 'development' && logger,
  sageMiddleware,
].filter(Boolean)

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sageMiddleware.run(rootSaga)

export const persistor = persistStore(store)
