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
            <img className="articleImg" src={this.props.articleItem.image_url} alt=""/>
            <h4>{this.props.articleItem.article_url}</h4>
            <p>{this.props.articleItem.content}</p>
            <h3>Article Comments: </h3>
          
            {this.props.articleItem.news_article_comments && this.props.articleItem.news_article_comments.map(comment => (
              <div key={comment.id}>
                <p>{comment.content}</p>
              </div>
            ))}
          
            {this.state.create
              ?
              <div>
                <input type="text" value={this.props.selectedComment} onChange={this.props.handleChange}/>
                <button onClick={() =>{
                  this.props.addCommentToArticle(this.props.articleItem)
                }}>Submit</button>
              </div>
            :
            <>
              <br/>
              <button onClick={() => {
                this.setState({
                  create: true
                })
            }}>Add Comment</button>
            </>
            }
          </div>
        }
      </div>
    )
  }
}

export default ArticleItem;
