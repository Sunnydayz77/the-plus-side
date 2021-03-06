# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


BlogPost.destroy_all
NewsArticle.destroy_all
User.destroy_all


user1 = User.create!(
  username: "JennyP",
  email: "jap@gmail.com",
  password: "123456",
  image_url: "https://hips.hearstapps.com/cosmouk.cdnds.net/16/41/1476291160-jennifer-aniston-friends.jpg",
  location: "Brooklyn, NY",
)

p "#{User.count} user was created!"



BlogPost.create!(
  image_url: "https://images.unsplash.com/photo-1545945774-73922eb27813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  title: "Things I'm Grateful For Today",
  content: " 'Cultivate the habit of being grateful for every good thing that comes to you, and to give thanks continuously. And because all things have contributed to your advancement, you should include all things in your gratitude.'
  ~Ralph Waldo Emerson ",
  user: user1
)

p "#{BlogPost.count} blog post was created!"



NewsArticle.create!(
  image_url: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1580&q=80",
  title: "Music Takes 13 Minutes to ‘Release Sadness’ and 9 to Make You Happy, Says New Study",
  article_url: "https://www.goodnewsnetwork.org/13-minute-musical-prescription-for-anxiety-and-depression/",
  content: "13 minutes was found to be the optimum listening time in the case of music to relax. This kind of music was characterized with a slow tempo, simple melodies and no lyrics, like Weightless, by Marconi Union.
  That song from this Manchester-based music trio was found to reduce symptoms of anxiety by up to 65%.
  'Our test subjects reported positive benefits including decreased muscle tension, negative thoughts disappearing, feeling peaceful and contented and being able to sleep better,' exclaimed the study.
  That’s because 79% had reduced muscle tension, 84% had less negative thoughts, and 82% had a better nights sleep or felt restful & contented.",
  user: user1
)

p "#{NewsArticle.count} news article was created!"