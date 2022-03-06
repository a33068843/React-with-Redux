import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { counterReducer } from 'store/features/counter';
import { effectsReducer } from 'store/features/effects';
import { userReducer } from 'store/features/user';
import mySaga from './features/effects/saga';
import { rootSaga } from 'store/sagas';

const reducers = combineReducers({
  counter: counterReducer,
  effects: effectsReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const customMiddleware = [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      }),
      sagaMiddleware,
    ];
    return customMiddleware;
  },
});

// sagaMiddleware.run(mySaga);
sagaMiddleware.run(rootSaga);
