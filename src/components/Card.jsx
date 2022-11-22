import React from 'react'
import CardHeader from './CardHeader'
import Comments from './Comments'
import PostBody from './PostBody'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { removePost } from '../redux/actions/blogActions'

const Card = ({ post }) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const removePosts = () => {
        dispatch(removePost(post.id))
    }

    return (
        <>
            {post ? <div className='card shadow' key={post.id}>
                <RiDeleteBin6Line color='tomato' style={{ position: 'absolute', right: '10px', top: '10px' }} size={30} onClick={removePosts} />
                <div className='p-3' onClick={() => navigation(`/post:${post.id}`, { state: { post: post } })}>
                    <CardHeader id={post.userId} />
                    <PostBody post={post} h={1} />
                    <hr></hr>
                    <Comments id={post.id} />
                </div>
            </div> : <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '80vw' }}>
                <h1 style={{ color: 'tomato' }}>Loading...</h1>
            </div>}
        </>
    )
}

export default Card