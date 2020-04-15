class BlogPostsController < ApplicationController
  before_action :set_blog_post, only: [:show, :update, :destroy, :add_blog_post_comment]
  before_action :authorize_request, only: [:create_by_user, :update, :destroy, :add_blog_post_comment]

  # GET /blog_posts
  def index
    @blog_posts = BlogPost.all

    render json: @blog_posts
  end

  # GET /blog_posts/1
  def show
    render json: @blog_post, include: :blog_post_comments
  end

  # POST /blog_posts
  # def create
  #   @blog_post = BlogPost.new(blog_post_params)

  #   if @blog_post.save
  #     render json: @blog_post, status: :created
  #   else
  #     render json: @blog_post.errors, status: :unprocessable_entity
  #   end
  # end

  # post '/users/:user_id/blog_posts'
  def create_by_user
    user = User.find(params[:user_id])
    blog_post = user.blog_posts.new(blog_post_params)
    if blog_post.save
      render json: blog_post, include: :user, status: :created
    else 
      render json: blog_post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blog_posts/1
  def update
    if @blog_post.update(blog_post_params)
      render json: @blog_post
    else
      render json: @blog_post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blog_posts/1
  def destroy
    @blog_post.destroy
  end

  # POST / blog_post_comments
  def add_blog_post_comment
    @blog_post_comment = BlogPostComment.find(params[:blog_post_comment_id])
    @blog_post.blog_post_commments << @blog_post_comment
    render json: @blog_post, include: :blog_post_comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_post
      @blog_post = BlogPost.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_post_params
      params.require(:blog_post).permit(:image_url, :title, :content, :user_id)
    end
end
