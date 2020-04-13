class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :add_blog_post, :add_news_article]

  # # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end

  # # GET /users/1
  # def show
  #   render json: @user
  # end

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({user_id: @user.id});
      render json: {user: @user.frontend_data, token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  # POST / blog_posts
  def add_blog_post
    @blog_post = BlogPost.find(params[:blog_post_id])
    @user.blog_posts << @blog_post
    render json: @user, include: :blog_posts
  end

  # POST / news_articles
  def add_news_article
    @news_article = NewsArticle.find(params[:news_article_id])
    @user.news_articles << @news_article
    render json: @user, include: :news_articles
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :image_url, :location, :description)
    end
end
