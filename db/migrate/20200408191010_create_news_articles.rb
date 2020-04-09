class CreateNewsArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :news_articles do |t|
      t.string :image_url
      t.string :title
      t.string :article_url
      t.string :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
