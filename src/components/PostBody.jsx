import React from 'react'

const PostBody = ({ post, details, h }) => {
    return (
        <div className='text-start mx-3' style={h && { height: '100px' }}>
            <h5>{post.title}</h5>
            {details && <p>{post.body}</p>}
        </div>
    )
}

export default PostBody