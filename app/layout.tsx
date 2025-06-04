import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Muhammad Balaj Javed',
  description: "Explore the portfolio of a passionate Web Developer and Software Engineering student, showcasing projects in React, Node.js, Firebase, and more.",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
