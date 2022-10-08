import React from 'react'
import styles from './Error.module.scss'

const Error = ({ error }) => {
  return (
    <div className={styles.error}>
        <span>{error}</span>
    </div>
  )
}

export default Error