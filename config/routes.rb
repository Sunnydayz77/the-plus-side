Rails.application.routes.draw do
  resources :news_article_comments
  resources :news_articles
  resources :blog_post_comments
  resources :blog_posts
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
