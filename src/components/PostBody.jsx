import React from 'react'

const PostBody = ({ post, details, h }) => {
    return (
        <>
            {post ? <div className='text-start mx-3' style={h && { height: '100px' }}>
                <h5>{post.title}</h5>
                {details && <p>{post.body}</p>}
            </div> : <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '80vw' }}>
                <h1 style={{ color: 'tomato' }}>Loading...</h1>
            </div>}
        </>
    )
}

export default PostBody