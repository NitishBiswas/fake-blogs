import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import '../App.css'

const Home = () => {
    const data = useSelector(blogs => blogs.blogs)
    return (
        <div className='container card_container my-5'>
            {data.posts.length > 0 ?
                data.posts.map((post) => {
                    return (
                        <Card post={post} key={post.id} />
                    )
                }) : <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '80vw' }}>
                    <h1 style={{ color: 'tomato' }}>Loading...</h1>
                </div>
            }
        </div>
    )
}

export default Home