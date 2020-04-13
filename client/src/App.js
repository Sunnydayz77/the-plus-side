import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import NewsArticleIndex from './components/NewsArticleIndex';
import BlogPostIndex from './components/BlogPostIndex';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import {
  readAllArticles,
  readAllPosts,
  signInUser,
  signUpUser,
  verifyUser,
  removeToken
} from './services/api-helper';

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
        name: "",
        title: "",
        image_url: "",
        article_url: "",
        content: ""
      },
      addComment: "", //form data to add a comment to an article or post
      authFormData: {
        image_url: "",
        username: "",
        email: "",
        password: "",
        location: "",
        description: ""
      }
    }
  }

  // onClick function to redirect to the sign in form
  handleSignInButton = () => {
    this.props.history.push('/sign_in')
  }

  handleSignUpButton = () => {
    this.props.history.push("/sign_up")
  }
  
  componentDidMount = () => {
    this.getArticles();
    this.getPosts();
    this.handleVerify();
  }

 // ============= News Articles ================

  //Function to get all articles from API

  getArticles = async () => {
    const news_articles = await readAllArticles();
    this.setState({ news_articles });
  }


// ============= Blog Posts ================

  //Function to get all posts from API

  getPosts = async () => {
    const blog_posts = await readAllPosts();
    this.setState({ blog_posts });
  }


  // =================== Auth ====================

  // Function to login a user
  handleSignIn = async () => {
    const currentUser = await signInUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  // Function to register a user
  handleSignUp = async (e) => {
    e.preventDefault();
    const currentUser = await signUpUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  // Function to logout user
  handleSignOut = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  // Handle change function for the auth forms
  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }



  // =================== Render ===================

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"><h1>The +Side</h1></Link>
          {this.state.currentUser
            ?
            <div>
              <h3>Hi {this.state.currentUser && this.state.currentUser.email}
                <button onClick={this.handleSignOut}>Sign Out</button></h3>
              <Link to="/news_articles">View All +Articles!</Link>
              &nbsp;
              <Link to="/blog_posts">View All +Blogs!</Link>
              <hr />
            </div>
            :
            <>
              <button onClick={this.handleSignInButton}> Sign In </button>
              &nbsp;
              <button onClick={this.handleSignUpButton}> Sign Up </button>
            </>
          }
        </header>

        <Route path="/sign_in" render={(props) => {
          return <SignIn
            handleSignIn={this.handleSignIn}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />
        }} />
        
        <Route path="/sign_up" render={(props) => {
          return <SignUp
            handleSignUp={this.handleSignUp}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />
        }} />
        
        <Route path='/news_articles' render={(props) => {
          return <NewsArticleIndex
            news_articles={this.state.news_articles}
          />
        }} />

        <Route path='/blog_posts' render={(props) => {
          return <BlogPostIndex
            blog_posts={this.state.blog_posts}
          />
        }} />

        <Footer>
          {/* Footer component placeholder */}
        </Footer>
      </div>
    );
  }
}

export default withRouter(App);
