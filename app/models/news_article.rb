class NewsArticle < ApplicationRecord
  belongs_to :user
  has_many :news_article_comments, dependent: :destroy
end
