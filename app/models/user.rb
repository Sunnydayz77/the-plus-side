class User < ApplicationRecord
  has_secure_password
  has_many :blog_posts
  has_many :blog_post_comments, through: :blog_posts
  has_many :news_articles
  has_many :news_article_comments, through: :news_articles

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  def frontend_data
    { 
      id: id,
      username: username,
      email: email,
      image_url: image_url,
      location: location,
      description: description,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
