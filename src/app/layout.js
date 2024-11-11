import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Trueke',
  description: 'Landing Trueke',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}