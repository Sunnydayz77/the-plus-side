class NewsArticlesController < ApplicationController
  before_action :set_news_article, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create_by_user, :update, :destroy, :add_news_article_comment]

  # GET /news_articles
  def index
    @news_articles = NewsArticle.all

    render json: @news_articles
  end

  # GET /news_articles/1
  def show
    render json: @news_article, include: :news_article_comments
  end

  # POST '/users/:user_id/news_articles'
  def create_by_user
    user = User.find(params[:user_id])
    news_article = user.news_articles.new(news_article_params)
    if news_article.save
      render json: news_article, include: :user, status: :created
    else 
      render json: news_article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /news_articles/1
  def update
    if @news_article.update(news_article_params)
      render json: @news_article
    else
      render json: @news_article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /news_articles/1
  def destroy
    @news_article.destroy
  end

  # POST / news_article_comments
  def add_news_article_comment
    @news_article_comment = NewsArticleComment.find(params[:news_article_comment_id])
    @news_article.news_article_commments << @news_article_comment
    render json: @news_article, include: :news_article_comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news_article
      @news_article = NewsArticle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def news_article_params
      params.require(:news_article).permit(:title, :image_url, :article_url, :content, :user_id)
    end
end

