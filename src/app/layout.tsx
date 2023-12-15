import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Bootstrap from '@/components/Bootstrap.js';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Toni-Lee's Portfolio",
  description: "A website that shows Toni-Lee's development work.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Bootstrap />
      </body>
    </html>
  )
}
