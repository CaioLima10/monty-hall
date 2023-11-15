import Door from "@/components/Door"
import { CreateDoor, updateDoor } from "@/function/CreateDoor"
import { useState } from "react"
import styles from "../styles/Game.module.css"

export default function PaginaGame() {
    const [ doors , setDoors ] = useState(CreateDoor(3 , 2))

    const renderDoors = () => {
      return doors.map( door => {
        return (
          <Door 
            key={door.number}  
            door={door} 
            onChange={newDoor => setDoors(updateDoor( doors , newDoor))}
          />
        ) 
      })
    } 

    return (
      <div className={styles.game}>
        <div className={styles.doors}>
          { renderDoors() }
        </div>
        <div className={styles.buttons}>
          <button>confirmar</button>
        </div>
      </div>
    )
}
