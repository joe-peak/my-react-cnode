import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from '@redux/reducers';

const logger = createLogger();
const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));