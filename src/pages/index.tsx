import Door from '@/components/Door'
import { CreateDoor, updateDoor } from '@/function/CreateDoor'
import DoorModel from '@/model/Door'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
    <main
      className={`flex ${inter.className}`}
    >
      { renderDoors() }
    </main>
  )
}
  