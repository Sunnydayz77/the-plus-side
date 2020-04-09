class CreateBlogPostComments < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_post_comments do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.references :blog_post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
