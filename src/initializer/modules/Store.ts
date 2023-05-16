import React from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import Reducers from './Reducers';
import actionMiddleware from '../middleware/ActionMiddleware';
import promiseMiddleware  from '../middleware/PromiseMiddleware';
//import RepositoryService from '../repositories/Repository.service';
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
  ...Reducers
});

const enhancer = __DEV__ ? compose(
  applyMiddleware(
    promiseMiddleware,
    logger,
    actionMiddleware(),
  )) : compose(
  applyMiddleware(
    promiseMiddleware,
    logger,
    actionMiddleware(),
  ));

export const store = createStore(rootReducer, {}, enhancer);

//Object.defineProperty(RepositoryService.prototype, 'state', {
  //get() {
    //return store.getState();
  //}
//});

export default store;
