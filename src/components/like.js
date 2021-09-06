import styles from './like.module.css'
import classnames from 'classnames'

export const Like = ({ liked, onClick }) => {
  return (
    <div className={classnames([styles.like, liked ? styles.liked : ''])} onClick={e => {
      e.preventDefault()
      e.stopPropagation()
      if (onClick) { onClick(e) }
    }}>
      { liked ? '♥' : '♡'}
    </div>
  )
}