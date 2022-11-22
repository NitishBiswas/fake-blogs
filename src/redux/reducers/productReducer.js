import { ActionTypes } from "../constants/action-types"

const initialState = {
    posts: [],
    users: [],
    comments: [],
    photos: [],
}

export const blogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_POSTS:
            return { ...state, posts: payload }
        case ActionTypes.FETCH_USERS:
            return { ...state, users: payload }
        case ActionTypes.FETCH_COMMENTS:
            return { ...state, comments: payload }
        case ActionTypes.FETCH_PHOTOS:
            return { ...state, photos: payload }
        case ActionTypes.REMOVE_POSTS:
            return { ...state, posts: state.posts.filter(post => post.id !== payload) }
        default:
            return state
    }
}