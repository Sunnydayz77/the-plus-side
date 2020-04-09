require 'test_helper'

class NewsArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @news_article = news_articles(:one)
  end

  test "should get index" do
    get news_articles_url, as: :json
    assert_response :success
  end

  test "should create news_article" do
    assert_difference('NewsArticle.count') do
      post news_articles_url, params: { news_article: { article_url: @news_article.article_url, content: @news_article.content, image_url: @news_article.image_url, title: @news_article.title, user_id: @news_article.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show news_article" do
    get news_article_url(@news_article), as: :json
    assert_response :success
  end

  test "should update news_article" do
    patch news_article_url(@news_article), params: { news_article: { article_url: @news_article.article_url, content: @news_article.content, image_url: @news_article.image_url, title: @news_article.title, user_id: @news_article.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy news_article" do
    assert_difference('NewsArticle.count', -1) do
      delete news_article_url(@news_article), as: :json
    end

    assert_response 204
  end
end
