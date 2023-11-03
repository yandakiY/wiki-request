/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki-Request : Do your wikipedia search quickly - By Yandaki',
  description: 'Search Wikipédia infos with keywords , made by yandaki.dev',
  icons:'https://cdn-icons-png.flaticon.com/512/1178/1178485.png',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
