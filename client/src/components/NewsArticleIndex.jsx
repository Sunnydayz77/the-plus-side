import React from 'react'

export default function NewsArticleIndex(props) {
  return (
    <div>
      <h2> News Article List:</h2>
      {props.news_articles.map((article) => (
        <div key={article.id}>
          <img src={article.image_url} alt=""/>
          <h3>{article.title}</h3>
          <h4>{article.article_url}</h4>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  )
}

