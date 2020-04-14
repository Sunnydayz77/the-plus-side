import React, { Component } from 'react';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  render() {
    return (
      <div>
        {this.props.postItem &&
          <div>
            <h1>{this.props.postItem.title}</h1>
            <img src={this.props.postItem.image_url} alt=""/>
            <h4>{this.props.postItem.article_url}</h4>
            <p>{this.props.postItem.content}</p>
          
            {this.props.postItem.comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
            {this.state.create
              ?
              <div>
                <select value={this.props.selectedComment} onChange={this.props.handleChange}>
                  <option>Select a comment</option>
                  {this.props.comments.map(comment=>(
                    <option>{comment.content}</option>
                  ))}
                </select>
                <button onClick={() =>{
                  this.props.addCommentToArticle(this.props.postItem)
                }}>Submit</button>
              </div>
              :
              <button onClick={() => {
                this.setState({
                  create: true
                })
              }}>Add</button>
            }
          </div>
        }
      </div>
    )
  }
}

export default PostItem;
