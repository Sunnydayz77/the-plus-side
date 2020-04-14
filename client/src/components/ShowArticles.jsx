import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      create: false,
      edit: false
    }
  }
  render() {
    return (
      <div>
        {this.props.news_articles.map(article => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <img className="articleImg" src={article.image_url} alt=""/>
            <h4>{article.article_url}</h4>
            <p>{article.content}</p>  
            
            {this.state.edit === article.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updateArticle(article);
                  this.setState({
                    edit: false
                  });
                }}>
                  <label>Title:
                    <input
                      name="title"
                      type="string"
                      value={this.props.formData.title}
                      onChange={this.props.handleChange}
                    />
                  </label>

                  <label>Image Url:
                    <input
                      name="image_url"
                      type="string"
                      value={this.props.formData.image_url}
                      onChange={this.props.handleChange} />
                  </label>
                  
                  <label>Article Url:
                    <input
                      name="article_url"
                      type="string"
                      value={this.props.formData.article_url}
                      onChange={this.props.handleChange} />
                  </label>

                  <label>Content:
                    <input
                      name="content"
                      type="string"
                      value={this.props.formData.content}
                      onChange={this.props.handleChange} />
                    </label>
                  
                  <button>Submit</button>
                </form>
              </div>
              :
              <div>
                <Link to={`/news_articles/${article.id}`} onClick={() => {
                  this.props.getArticle(article.id)
                }}>{article.title}</Link>
                &nbsp;
                <button onClick={() => {
                  this.props.setArticleForm(article);
                  this.setState({
                    edit: article.id
                  })
                }}>Edit Article</button>
                &nbsp;
                <button onClick={() => {
                  this.props.deleteArticle(article)
                }}>Delete Article</button>

              </div>
            }
          </div>
        ))}

        <hr />

        {this.state.create 
          ?
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit(this.props.id, this.props.formData);
              this.setState({ create: false })
            }}>
              <label>Title:
                <input
                  name="title"
                  type="string"
                  value={this.props.formData.title}
                  onChange={this.props.handlePostChange} />
              </label>
              
              <label>Image Url:
                <input
                  name="image_url"
                  type="string"
                  value={this.props.formData.image_url}
                  onChange={this.props.handlePostChange} />
              </label>
              
              <label>Article Url:
                <input
                  name="article_url"
                  type="string"
                  value={this.props.formData.article_url}
                  onChange={this.props.handlePostChange} />
              </label>

              <label>Content:
                <input
                  name="content"
                  type="string"
                  value={this.props.formData.content}
                  onChange={this.props.handlePostChange} />
                </label>
                
              <button>Submit</button>
            </form>
          </div>
          :
          <button onClick={() => {
            this.setState({ create: true })
          }}>Add Article</button>
        }
      </div>
    )
  }
}

export default ShowArticles;