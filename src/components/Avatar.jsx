import PropTypes from 'prop-types'

import styles from './Avatar.module.css'

export function Avatar({ src, alt, borderless = false }) {
  const className = borderless ? styles.avatar : styles.avatarWithBorder
  return <img className={className} src={src} alt={alt} />
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  borderless: PropTypes.bool,
}
0
