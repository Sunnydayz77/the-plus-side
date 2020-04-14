import React from 'react';

// Functional component to show comments
const ShowComments = (props) => {
  return (
    <div>
      {props.comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowComments;