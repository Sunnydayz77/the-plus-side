require 'test_helper'

class BlogPostCommentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blog_post_comment = blog_post_comments(:one)
  end

  test "should get index" do
    get blog_post_comments_url, as: :json
    assert_response :success
  end

  test "should create blog_post_comment" do
    assert_difference('BlogPostComment.count') do
      post blog_post_comments_url, params: { blog_post_comment: { blog_post_id: @blog_post_comment.blog_post_id, content: @blog_post_comment.content, user_id: @blog_post_comment.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show blog_post_comment" do
    get blog_post_comment_url(@blog_post_comment), as: :json
    assert_response :success
  end

  test "should update blog_post_comment" do
    patch blog_post_comment_url(@blog_post_comment), params: { blog_post_comment: { blog_post_id: @blog_post_comment.blog_post_id, content: @blog_post_comment.content, user_id: @blog_post_comment.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy blog_post_comment" do
    assert_difference('BlogPostComment.count', -1) do
      delete blog_post_comment_url(@blog_post_comment), as: :json
    end

    assert_response 204
  end
end
