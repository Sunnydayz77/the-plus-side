import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import { readAllArticles, readAllPosts } from './services/api-helper';
import NewsArticleIndex from './components/NewsArticleIndex';
import BlogPostIndex from './components/BlogPostIndex';
import SignIn from './components/SignIn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,  //logged in user is set here
      news_articles: [],
      blog_posts: [],
      comments: [],
      articleItem: null, //value for a selected article
      postItem: null,  //value for a selected blog post
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

  // onClick function to redirect to the sign in form
  handleSignInButton = () => {
    this.props.history.push("/sign_in")
  }
  
  componentDidMount = async () => {
    const news_articles = await readAllArticles();
    const blog_posts = await readAllPosts();
    this.setState ({
      news_articles,
      blog_posts
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"><h1>The +Side</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <h3>Hi {this.state.currentUser && this.state.currentUser.username} <button onClick={this.handleLogout}>Sign Out</button></h3>
              <Link to="/news_articles">View All +Articles!</Link>
              &nbsp;
              <Link to="/blog_posts">View All +Blogs!</Link>
              <hr />
            </div>
            :
            <button onClick={this.handleSignInButton}>Sign In / Sign Up</button>
          }
        </header>

        <Route exact path="/sign_in" render={(props) => (
          <SignIn
            handleSignIn={this.handleSignIn}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        
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
