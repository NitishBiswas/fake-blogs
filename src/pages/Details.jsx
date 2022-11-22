import React from 'react'
import { useLocation } from 'react-router-dom'
import CardHeader from '../components/CardHeader'
import Comments from '../components/Comments'
import PostBody from '../components/PostBody'

const Details = () => {
    const post = useLocation().state.post
    return (
        <div className='p-3 shadow container my-5'>
            <CardHeader id={post.userId} />
            <PostBody post={post} details={1} />
            <hr></hr>
            <Comments id={post.id} comments={1} />
        </div>
    )
}

export default Details