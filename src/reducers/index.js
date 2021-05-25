import {combineReducers} from 'redux';

import items from './items'
import purchases from './purchases'

export const reducers = combineReducers({items, purchases});