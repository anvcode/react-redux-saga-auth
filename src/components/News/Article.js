const Article = (props) => {
  const {title, url, author, description} = props

  return (
    <article>
      <div>
        <div>
          <a href={url}>{title}</a>
          <div>
            <span>Автор: {author}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Article
