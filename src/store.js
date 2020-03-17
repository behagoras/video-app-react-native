import {createStore} from 'redux';
import reducer from './reducers/videos';

const store = createStore(reducer, {}); // reducer, estado inicial y enhancer

export default store;
