require 'test_helper'

class NewsArticleCommentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @news_article_comment = news_article_comments(:one)
  end

  test "should get index" do
    get news_article_comments_url, as: :json
    assert_response :success
  end

  test "should create news_article_comment" do
    assert_difference('NewsArticleComment.count') do
      post news_article_comments_url, params: { news_article_comment: { content: @news_article_comment.content, news_article_id: @news_article_comment.news_article_id, user_id: @news_article_comment.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show news_article_comment" do
    get news_article_comment_url(@news_article_comment), as: :json
    assert_response :success
  end

  test "should update news_article_comment" do
    patch news_article_comment_url(@news_article_comment), params: { news_article_comment: { content: @news_article_comment.content, news_article_id: @news_article_comment.news_article_id, user_id: @news_article_comment.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy news_article_comment" do
    assert_difference('NewsArticleComment.count', -1) do
      delete news_article_comment_url(@news_article_comment), as: :json
    end

    assert_response 204
  end
end
