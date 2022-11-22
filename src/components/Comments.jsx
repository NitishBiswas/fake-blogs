import React from 'react'
import { useSelector } from 'react-redux'

const Comments = ({ id, comments }) => {
    const users = useSelector(user => user.blogs)
    const comment = users.comments.filter(comment => comment.postId === id)

    return (
        <>
            {comments === 1 ? <div className='text-start'>
                <h5 className='my-3'>Comments</h5>
                {comment.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p className='fw-bold'>{comment.name}</p>
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
            </div> : <div className='mx-3 text-start'>Comments : {comment.length}</div>}
        </>
    )
}

export default Comments