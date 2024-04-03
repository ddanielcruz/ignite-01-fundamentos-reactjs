import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { Avatar } from './Avatar.jsx'

import styles from './Comment.module.css'

export function Comment({ comment: { id, content }, onDelete }) {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDelete(id)
  }

  const handleLikeComment = () => {
    setLikeCount((count) => count + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/ddanielcruz.png"
        alt="Daniel Cruz"
        borderless
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Cruz</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}
