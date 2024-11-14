import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Trueke',
  description: 'Landing Trueke',
  icons: {
    icon: '/trueke-iso.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}