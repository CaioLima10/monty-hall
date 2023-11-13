import Door from '@/components/Door'
import DoorModel from '@/model/Door'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [toggleDoor , setToggleDoor ] = useState(new DoorModel(1))

  return (
    <main
      className={`flex ${inter.className}`}
    >
      <Door 
        door={toggleDoor}
        onChange={newDoor => setToggleDoor(newDoor) }
        />
    </main>
  )
}
  