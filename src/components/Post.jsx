import { useState } from 'react'
import PropTypes from 'prop-types'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar.jsx'
import { Comment } from './Comment.jsx'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt, comments: commentList }) {
  const [comments, setComments] = useState(commentList)
  const [newCommentText, setNewCommentText] = useState('')
  const isNewCommentEmpty = !newCommentText.trim()

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (event) => {
    event.preventDefault()

    setComments([...comments, { id: Date.now(), content: newCommentText }])
    setNewCommentText('')
  }

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId))
  }

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          }

          if (line.type === 'link') {
            return (
              <p key={index}>
                <a href={line.url} target="_blank" rel="noreferrer">
                  {line.content}
                </a>
              </p>
            )
          }

          return null
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['paragraph', 'link']).isRequired,
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
  ).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
