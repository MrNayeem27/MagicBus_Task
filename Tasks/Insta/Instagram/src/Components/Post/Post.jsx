import React from 'react'
import './Post.css';

const Post = ({post}) => {
  return (
    <div className='container'>
        {post.map((value) => (
            <div className="image">
                <img src={value.data} />
            </div>
        ))}
      
    </div>
  )
}

export default Post
