import {createStore, applyMiddleware, combineReducers} from 'redux';
import inquiries from './ducks/inquiries';
import promiseMiddleware from 'redux-promise-middleware';

let reducer = combineReducers({
  inquiries
});

export default createStore(reducer, applyMiddleware(promiseMiddleware()));
