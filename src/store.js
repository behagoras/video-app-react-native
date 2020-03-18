import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Thunk from 'redux-thunk';
import videosReducer from './reducers/videos';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const videosPersistConfig = {
  key: 'videos',
  storage: AsyncStorage,
  blacklist: ['selectedVideo'],
};

const rootReducer = combineReducers({
  videos: persistReducer(videosPersistConfig, videosReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(Thunk));
const persistor = persistStore(store);

export {store, persistor};
