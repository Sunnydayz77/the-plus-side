import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  render() {
    return (
      <div>
        {this.props.getArticle &&
          <div>
            <h1>{this.props.getArticle.title}</h1>
            <img src={this.props.getArticle.image_url} alt=""/>
            <h4>{this.props.getArticle.article_url}</h4>
            <p>{this.props.getArticle.content}</p>
          
            {this.props.getArticle.comments.map(comment => (
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
                  this.props.addCommentToArticle(this.props.getArticle)
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

export default Article;
