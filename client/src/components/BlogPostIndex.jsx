import React from 'react'

export default function BlogPostIndex(props) {
  return (
    <div>
      <h2> Blog Post List:</h2>
      {props.blog_posts.map((post) => (
      <h3>{post.tite}</h3>
      ))}
    </div>
  )
}
