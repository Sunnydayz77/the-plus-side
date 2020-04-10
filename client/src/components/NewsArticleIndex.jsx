import React from 'react'

export default function NewsArticleIndex(props) {
  return (
    <div>
      <h2> News Article List:</h2>
      {props.news_articles.map((article) => (
        <p>{article.tite}</p>
      ))}
    </div>
  )
}
