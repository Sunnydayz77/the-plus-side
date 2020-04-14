import React, { Component } from 'react';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    }
  }

  render() {
    return (
      <div>
        {this.props.articleItem &&
          <div>
            <h1>{this.props.articleItem.title}</h1>
            <img src={this.props.articleItem.image_url} alt=""/>
            <h4>{this.props.articleItem.article_url}</h4>
            <p>{this.props.articleItem.content}</p>
          
            {this.props.articleItem.comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
            {this.state.create
              ?
              <div>
                <select value={this.props.selectedComment} onChange={this.props.handleChange}>
                  <option>Create a comment</option>
                  {this.props.comments.map(comment=>(
                    <option>{comment.content}</option>
                  ))}
                </select>
                <button onClick={() =>{
                  this.props.addCommentToArticle(this.props.articleItem)
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

export default ArticleItem;
