import { combineReducers } from 'redux';
// import { cartReducer } from './cartReducer';
import { blogsReducer } from './productReducer';

export const reducers = combineReducers({
    blogs: blogsReducer,
})