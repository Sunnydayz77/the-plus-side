const axios = require('axios');

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://the-plus-side.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl 
});

// ============= Auth =================

export const signInUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const signUpUser = async (registerData) => {
  const resp = await api.post(`/users/`, { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// export const addNewsArticle = async (articleId, id) => {
//   const resp = await api.get(`/news_articles/${articleId}/users/${id}`);
//   return resp.data;
// }


// export const addBlogPost = async (postId, id) => {
//   const resp = await api.get(`/blog_posts/${postId}/users/${id}`);
//   return resp.data;
// }


// ============= News Articles =================

export const readAllArticles = async () => {
  const resp = await api.get(`/news_articles`);
  return resp.data;
}

export const readOneArticle = async (id) => {
  const resp = await api.get(`/news_articles/${id}`);
  return resp.data;
}

export const createArticle = async (user_id, article) => {
  const resp = await api.post(`/users/${user_id}/news_articles`, article);
  return resp.data;
}

export const updateArticle = async (article, id) => {
  const resp = await api.put(`/news_articles/${id}`, { news_article: article });
  return resp.data;
}

export const destroyArticle = async (id) => {
  const resp = await api.delete(`/news_articles/${id}`);
  return resp.data;
}

// export const addNewsArticleComment = async (commentId, articleId) => {
//   const resp = await api.get(`/news_article_comments/${commentId}/news_articles/${articleId}`);
//   return resp.data;
// }

// ============= News Article Comments =================

export const readAllArticleComments = async (id) => {
  const resp = await api.get(`/news_articles/${id}/news_article_comments`);
  return resp.data;
}

export const readOneArticleComment = async (id, commentId) => {
  const resp = await api.get(`/news_articles/${id}/news_article_comment/${commentId}`);
  return resp.data;
}

// export const createArticleComment = async (articleCommentData) => {
//   const resp = await api.post(`/news_article_comments`, { news_article_comment: articleCommentData });
//   return resp.data;
// }

export const addCommentToArticle = async (id, comment) => {
  const resp = await api.post(`/news_articles/${id}/news_article_comments`,  { news_article_comment: comment })
  return resp.data
}

export const updateArticleComment = async (id, commentId, articleCommentData) => {
  const resp = await api.put(`/news_articles/${id}/news_article_comments/${commentId}`, { news_article_comment: articleCommentData });
  return resp.data;
}

export const destroyArticleComment = async (id, commentId) => {
  const resp = await api.delete(`/news_articles/${id}/news_article_comments/${commentId}`);
  return resp.data;
}


// ============= Blog Posts =================


export const readAllPosts = async () => {
  const resp = await api.get(`/blog_posts`);
  return resp.data;
}

export const readOnePost = async (id) => {
  const resp = await api.get(`/blog_posts/${id}`);
  return resp.data;
}

export const createPost = async (user_id, postData) => {
  const resp = await api.post(`/users/${user_id}/blog_posts`, postData);
  return resp.data;
}

export const addCommentToPost = async (id, commentId) => {
  const resp = await api.get(`/blog_posts/${id}/blog_post_comments/${commentId}`)
  return resp.data
}

// export const addBlogPostComment = async (commentId, postId) => {
//   const resp = await api.get(`/blog_post_comments/${commentId}/blog_posts/${postId}`);
//   return resp.data;
// }

export const updatePost = async (postData, id) => {
  const resp = await api.put(`/blog_posts/${id}`, { blog_post: postData });
  return resp.data;
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/blog_posts/${id}`);
  return resp.data;
}


// ============= Blog Post Comments =================

export const readAllPostComments = async (postId) => {
  const resp = await api.get(`/blog_posts/${postId}/blog_post_comments`);
  return resp.data;
}

export const readOnePostComment = async (postId, id) => {
  const resp = await api.get(`/blog_posts/${postId}/blog_post_comments/${id}`);
  return resp.data;
}

export const createPostComment = async (postId, PostCommentData) => {
  const resp = await api.post(`/blog_posts/${postId}/blog_post_comments`, { blog_post_comment: PostCommentData });
  return resp.data;
}

export const updatePostComment = async (PostCommentData, id) => {
  const resp = await api.put(`/blog_post_comments/${id}`, { blog_post_comment: PostCommentData });
  return resp.data;
}

export const destroyPostComment = async (id) => {
  const resp = await api.delete(`/blog_post_comments/${id}`);
  return resp.data;
}
