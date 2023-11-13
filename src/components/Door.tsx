import React from 'react'
import styles from "../styles/Door.module.css"
import DoorModel from '@/model/Door'
import Present from './Present'


interface IDoorProps{
  door: DoorModel
  onChange: ( newDoor: DoorModel ) => void
}

export default function Door(props: IDoorProps) {

  const { door } = props

  const selected = door.selected && !door.open ? styles.selected : ''

  const toggleSelection = () => props.onChange(door.alterSelected())
  const openDoor = ( event: any ) => {
    event.stopPropagation()
    props.onChange(door.openDoor())
    
  }

  const renderDoor = () => {
    return (
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div onClick={openDoor} className={styles.handle}></div>
        </div>  
    )
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selected}`}>
        { door.close ? renderDoor() : door.present ? <Present/> : false  }
      </div>
        <div className={styles.floor}></div>
    </div>
  )
}
