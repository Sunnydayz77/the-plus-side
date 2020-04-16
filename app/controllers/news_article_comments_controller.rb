class NewsArticleCommentsController < ApplicationController
  before_action :set_news_article_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /news_article_comments
  def index
    @news_article_comments = NewsArticleComment.all

    render json: @news_article_comments
  end

  # GET /news_article_comments/1
  def show
    render json: @news_article_comment
  end

  # POST /news_article_comments
  def create
    @news_article_comment = @current_user.news_article_comments.new(news_article_comment_params)

    if @news_article_comment.save
      render json: @news_article_comment, status: :created
    else
      render json: @news_article_comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /news_article_comments/1
  def update
    if @news_article_comment.update(news_article_comment_params)
      render json: @news_article_comment
    else
      render json: @news_article_comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /news_article_comments/1
  def destroy
    @news_article_comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news_article_comment
      @news_article_comment = NewsArticleComment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def news_article_comment_params
      params.require(:news_article_comment).permit(:content, :user_id, :news_article_id)
    end
end
