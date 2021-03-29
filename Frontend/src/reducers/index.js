/**
 * Combine Reducers Redux Data
 */
import { combineReducers } from 'redux';
import { IntlReducer as ReducersIntl } from 'react-redux-multilingual'

// Create Custome Reducers
import products from './products';
import category from "./products";
import filter_category from './products'
import user from './products'
import about from './products'

import filters from './filters';

export const rootReducer = combineReducers({
    user,
    filters
});