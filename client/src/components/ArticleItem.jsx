import React, { Component } from 'react';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      edit: false
    }
  }

  render() {
    return (
      <div className="articleItem">
        {this.props.articleItem &&
          <div>
            <h1>{this.props.articleItem.title}</h1>
            <img className="articleImg" src={this.props.articleItem.image_url} alt=""/>
            <h4>{this.props.articleItem.article_url}</h4>
            <p>{this.props.articleItem.content}</p>
            <h3>Article Comments: </h3>
          
            {this.props.articleItem.news_article_comments && this.props.articleItem.news_article_comments.map(comment => (
              <div className="comment">
                <div key={comment.id}>
                  <p>{comment.content}</p>
                </div>

              {/* {this.state.edit === comment.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updateArticleComment(comment);
                  this.setState({
                    edit: false
                  });
                }}>

                  <label>Giphy/Image Url:
                    <input
                      name="image_url"
                      type="string"
                      value={this.props.commentForm.image_url}
                      onChange={this.props.commentForm} />
                  </label>

                  <label>Content:
                    <input
                      name="content"
                      type="string"
                      value={this.props.commentForm.content}
                      onChange={this.props.commentForm} />
                    </label>
                  
                  <button>Submit</button>
                </form>
              </div>
              :
                <div>
                  <button onClick={() => {
                    this.props.setArticleForm(comment);
                    this.setState({
                      edit: comment.id
                    })
                  }}>Edit Comment</button>

                  &nbsp;
                      
                  <button onClick={() => {
                    this.props.destroyArticleComment(comment)
                  }}>Delete Comment</button>
              </div>
            } */}
          </div>
        ))}
            
          
            {this.state.create
          ?
            <>
              <input type="text" value={this.props.selectedComment} onChange={this.props.handleChange}/>
              <button onClick={() =>{
                this.props.addCommentToArticle(this.props.articleItem)
              }}>Submit</button>
            </>
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
