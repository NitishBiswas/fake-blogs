import fakeBlog from '../../apis/fakeBlog';
import { ActionTypes } from "../constants/action-types"

export const fetchData = () => {
    return async (dispatch, getData) => {
        const posts = await fakeBlog.get('/posts?_limit=20')
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: posts.data })
        const users = await fakeBlog.get('/users')
        dispatch({ type: ActionTypes.FETCH_USERS, payload: users.data })
        const comments = await fakeBlog.get('/comments')
        dispatch({ type: ActionTypes.FETCH_COMMENTS, payload: comments.data })
        const photos = await fakeBlog.get('/photos?_limit=100')
        dispatch({ type: ActionTypes.FETCH_PHOTOS, payload: photos.data })
    }
}

export const removePost = (id) => {
    return {
        type: ActionTypes.REMOVE_POSTS,
        payload: id
    }
}

