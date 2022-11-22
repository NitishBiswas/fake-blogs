import { combineReducers } from 'redux';
// import { cartReducer } from './cartReducer';
import { blogsReducer } from './blogReducer';

export const reducers = combineReducers({
    blogs: blogsReducer,
})