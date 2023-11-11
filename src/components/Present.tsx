import React from 'react'
import styles from "../styles/Present.module.css"

export default function Present() {
  return (
    <div className={styles.present}>
        <div className={styles.cover}></div>
        <div className={styles.contour}></div>
        <div className={styles.verticalLoop}></div>
        <div className={styles.horizontalLoop}></div>
    </div>
  )
}
