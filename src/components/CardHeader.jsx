import React from 'react'
import { useSelector } from 'react-redux'

const CardHeader = ({ id }) => {
    const users = useSelector(user => user.blogs)
    const photo = users.photos.filter(photo => photo.id === id)
    const user = users.users.filter(user => user.id === id)

    return (
        <>
            {photo.length > 0 ? <div className='d-flex my-3 align-items-center cars'>
                <img className='mx-3' src={photo[0].url} alt='user' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                <h4>{user[0].name}</h4>
            </div> : <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '80vw' }}>
                <h1 style={{ color: 'tomato' }}>Loading...</h1>
            </div>}
        </>
    )
}

export default CardHeader