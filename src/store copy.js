import {combineReducers} from 'redux';
import AsyncStorage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import Thunk from 'redux-thunk';

import videosReducer from './reducers/videos';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const videosPersistConfig = {
  key: 'videos',
  storage: AsyncStorage,
  blacklist: ['isLoggingIn'],
};

const rootReducer = combineReducers({
  videos: persistReducer(videosPersistConfig, videosReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
