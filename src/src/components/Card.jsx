import React from 'react'
import styles from '../styles/card.module.css'

export default function Card(props) {
  return (
    <div className={styles.main}>
      <div className={styles.pic}>{props.pic}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}
