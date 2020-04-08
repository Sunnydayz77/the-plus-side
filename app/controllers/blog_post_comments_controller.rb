class BlogPostCommentsController < ApplicationController
  before_action :set_blog_post_comment, only: [:show, :update, :destroy]

  # GET /blog_post_comments
  def index
    @blog_post_comments = BlogPostComment.all

    render json: @blog_post_comments
  end

  # GET /blog_post_comments/1
  def show
    render json: @blog_post_comment
  end

  # POST /blog_post_comments
  def create
    @blog_post_comment = BlogPostComment.new(blog_post_comment_params)

    if @blog_post_comment.save
      render json: @blog_post_comment, status: :created, location: @blog_post_comment
    else
      render json: @blog_post_comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blog_post_comments/1
  def update
    if @blog_post_comment.update(blog_post_comment_params)
      render json: @blog_post_comment
    else
      render json: @blog_post_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blog_post_comments/1
  def destroy
    @blog_post_comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_post_comment
      @blog_post_comment = BlogPostComment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_post_comment_params
      params.require(:blog_post_comment).permit(:content, :user_id, :blog_post_id)
    end
end
