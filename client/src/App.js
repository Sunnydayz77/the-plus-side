import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import { readAllArticles, readAllPosts } from './services/api-helper';
import NewsArticleIndex from './components/NewsArticleIndex';
import BlogPostIndex from './components/BlogPostIndex';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      news_articles: [],
      blog_posts: [],
      comments: [],
      articleItem: null,
      postItem: null,
      formData: { //to add a news article or blog post
        title: '',
        image_url: '',
        article_url: '',
        content: ''
      },
      addComment: '', //form data to add a comment to an article or post
      authFormData: {
        image_url: '',
        username: '',
        email: '',
        password: '',
        location: '',
        description: ''
      }
    }
  }
  
  componentDidMount = async () => {
    const news_articles = await readAllArticles();
    const blog_posts = await readAllPosts();
    console.log(news_articles,
      blog_posts)
    this.setState ({
      news_articles,
      blog_posts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>The +Side</h1>

        <Route exact path='/news_articles' render={(props) => {
          return <NewsArticleIndex
            news_articles={this.state.news_articles}
          />
        }} />

        <Route exact path='/blog_posts' render={(props) => {
          return <BlogPostIndex
            blog_posts={this.state.blog_posts}
          />
        }} />
        
      </div>
    );
  }
}

export default App;
