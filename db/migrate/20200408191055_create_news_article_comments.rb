class CreateNewsArticleComments < ActiveRecord::Migration[6.0]
  def change
    create_table :news_article_comments do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.references :news_article, null: false, foreign_key: true

      t.timestamps
    end
  end
end
