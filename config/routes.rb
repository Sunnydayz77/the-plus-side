Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users

  resources :news_articles do
    resources :news_article_comments
    end

  resources :blog_posts do
    resources :blog_post_comments
    end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
