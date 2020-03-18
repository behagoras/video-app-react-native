import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Thunk from 'redux-thunk';
import videos from './reducers/videos';
const reducer = combineReducers({
  videos,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(Thunk));
const persistor = persistStore(store);
export {store, persistor};
