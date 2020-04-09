# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_08_191055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blog_post_comments", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id", null: false
    t.bigint "blog_post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["blog_post_id"], name: "index_blog_post_comments_on_blog_post_id"
    t.index ["user_id"], name: "index_blog_post_comments_on_user_id"
  end

  create_table "blog_posts", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.string "content"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_blog_posts_on_user_id"
  end

  create_table "news_article_comments", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id", null: false
    t.bigint "news_article_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["news_article_id"], name: "index_news_article_comments_on_news_article_id"
    t.index ["user_id"], name: "index_news_article_comments_on_user_id"
  end

  create_table "news_articles", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.string "article_url"
    t.string "content"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_news_articles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
    t.string "location"
    t.string "description"
  end

  add_foreign_key "blog_post_comments", "blog_posts"
  add_foreign_key "blog_post_comments", "users"
  add_foreign_key "blog_posts", "users"
  add_foreign_key "news_article_comments", "news_articles"
  add_foreign_key "news_article_comments", "users"
  add_foreign_key "news_articles", "users"
end
