import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans as MainFont } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'

const mainFont = MainFont({ 
  weight: ['300', '400'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Sky Egg Technologies LLC',
  description: 'Portfolio website for Sky Egg.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
