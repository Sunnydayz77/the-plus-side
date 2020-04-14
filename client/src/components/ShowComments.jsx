import React from 'react';

// Simple functional component to show flavors
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