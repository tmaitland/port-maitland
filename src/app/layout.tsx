import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; 


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Toni-Lee's Portfolio",
  description: "A website that shows Toni-lee's work.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
