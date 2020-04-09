class BlogPost < ApplicationRecord
  belongs_to :user
  has_many :blog_post_comments, dependent: :destroy
end
