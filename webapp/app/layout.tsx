import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roomi',
  description: 'Find a compatible roommate near campus.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="container">
            <Link href="/" className="brand">
              Roomi
            </Link>
            <nav>
              <Link href="/support">Support</Link>
              <Link href="/privacy">Privacy</Link>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
        <footer>
          <div className="container">© 2026 Aprameya Kannan</div>
        </footer>
      </body>
    </html>
  )
}
