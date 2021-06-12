import {combineReducers} from 'redux';

import items from './items'
import purchases from './purchases'
import selectedGender from './selectedGender'

export const reducers = combineReducers({items, purchases, selectedGender});