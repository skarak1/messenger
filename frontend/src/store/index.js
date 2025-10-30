import {legacy_createStore as createStore,compose,combineReducers,applyMiddleware} from 'redux';

import { thunk as thunkMiddleware } from 'redux-thunk';

const dummyReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
  dummy: dummyReducer
});

const middleware = [thunkMiddleware];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;