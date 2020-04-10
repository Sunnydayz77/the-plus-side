import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import { readAllArticles, readAllPosts } from './services/api-helper';
import NewsArticleIndex from './components/NewsArticleIndex';
import BlogPostIndex from './components/BlogPostIndex';

class App extends Component {
  constructor() {
    super()
    this.state = {
      news_articles: [],
      blog_posts: []
    }
  }
  
  async componentDidMount() {
    const news_articles = await readAllArticles();
    const blog_posts = await readAllPosts();
    this.setState = ({
      news_articles,
      blog_posts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>The +Side</h1>

        <Route path='/news_articles' render={() => {
          return <NewsArticleIndex
            news_articles={this.state.news_articles}
          />

        }} />

        <Route path='/blog_posts' render={() => {
          return <BlogPostIndex
            blog_posts={this.state.blog_posts}
          />
        }} />
        
      </div>
    );
  }
}

export default App;
