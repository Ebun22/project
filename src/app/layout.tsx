import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from './context/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>

      <body className="bg-black grow">
        <StoreProvider>
          <main className=" w-full bg-black"> {children}</main>
          <div id="modal-root"></div>
        </StoreProvider>
      </body>

    </html>
  )
}
