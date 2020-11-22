import {createStore, applyMiddleware, combineReducers} from 'redux';
import inquiries from './ducks/inquiries';
import wizard from './ducks/wizard';
import promiseMiddleware from 'redux-promise-middleware';

let reducer = combineReducers({
  inquiries,
  wizard
});

export default createStore(reducer, applyMiddleware(promiseMiddleware));
