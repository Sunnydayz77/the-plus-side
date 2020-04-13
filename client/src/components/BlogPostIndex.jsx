import React from 'react'

export default function BlogPostIndex(props) {
  return (
    <div>
      <h2> Blog Post List:</h2>
        {props.blog_posts.map((post) => (
          <div key={post.id}>
            <img className="postImg" src={post.image_url} alt=""/>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
      ))}
    </div>
  )
}
