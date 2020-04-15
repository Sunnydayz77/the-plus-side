import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPosts extends Component {
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
        {this.props.blog_posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <img className="postImg" src={post.image_url} alt=""/>
            <h4>{post.post_url}</h4>
            <p>{post.content}</p>  
            
            {this.state.edit === post.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updatePost(post);
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
                <Link to={`/news_posts/${post.id}`} onClick={() => {
                  this.props.getPost(post.id)
                }}>{post.title}</Link>
                &nbsp;
                <button onClick={() => {
                  this.props.setPostForm(post);
                  this.setState({
                    edit: post.id
                  })
                }}>Edit Post</button>
                &nbsp;
                <button onClick={() => {
                  this.props.deletePost(post)
                }}>Delete Post</button>

              </div>
            }
          </div>
        ))}

        <br/>

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
          }}>Add Post</button>
        }
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default ShowPosts;