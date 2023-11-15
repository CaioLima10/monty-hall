import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex ${inter.className}`}
    >
      <h1>inicio</h1>
    </main>
  )
}
  