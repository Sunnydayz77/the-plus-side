class NewsArticlesController < ApplicationController
  before_action :set_news_article, only: [:show, :update, :destroy, :add_news_article_comment]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_news_article_comment]

  # GET /news_articles
  def index
    @news_articles = NewsArticle.all

    render json: @news_articles
  end

  # GET /news_articles/1
  def show
    render json: @news_article, include: :news_article_comments
  end

  # POST /news_articles
  def create
    @news_article = NewsArticle.new(news_article_params)

    if @news_article.save
      render json: @news_article, status: :created, location: @news_article
    else
      render json: @news_article.errors, status: :unprocessable_entity
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
      params.require(:news_article).permit(:image_url, :title, :article_url, :content, :user_id)
    end
end


# params: { news_article: { article_url: @news_article.article_url, content: @news_article.content, image_url: @news_article.image_url, title: @news_article.title, user_id: @news_article.user_id } }
