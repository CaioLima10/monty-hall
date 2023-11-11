import Door from '@/components/Door'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex ${inter.className}`}
    >
      <Door selected={true}/>
      <Door/>
      <Door selected={true}/>
      <Door/>
    </main>
  )
}
  