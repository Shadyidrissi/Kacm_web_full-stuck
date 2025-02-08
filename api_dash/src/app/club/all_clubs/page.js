import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <div className="home-page">
            <Navbar />
            <div className='club'>
                <h2 className='title'>Title</h2>
                <div className='cards-clubs'>
                    <a href='' className='card-club'>
                        <img src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png" alt="" />
                        <h3>name</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default page