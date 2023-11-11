import React from 'react'
import styles from "../styles/Door.module.css"


interface IDoorProps{
  selected?: boolean
}

export default function Door(props: IDoorProps) {

  const selected = props.selected ? styles.selected : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.handle}></div>
        </div>  
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
