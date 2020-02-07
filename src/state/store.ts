import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import projectReducers from './reducers';
import { reducer as formReducer } from 'react-redux-form-lite';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(reduxThunk);

const reducers = combineReducers({ ...projectReducers, reduxForm: formReducer });

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
