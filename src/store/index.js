import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
    // console.log("store",store.getState())
});

export default store;