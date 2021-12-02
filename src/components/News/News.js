import React from 'react'
import Article from './Article'

const News = (props) => {
  if (props.news.length === 0) {
    props.getNews()
  }

  return (
    <div>
      <h1 className='fw-normal text-center'>Новости</h1>
      <div>
        {
          props.news.map((article, index) =>
            <Article key={index}
                     title={article.title}
                     description={article.description}
                     url={article.url}
                     author={article.author}
                     urlToImage={article.urlToImage}
            />)
        }
      </div>
    </div>
  )
}

export default News
