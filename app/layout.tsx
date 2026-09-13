import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clear Design — Commerce intelligence',
  description: 'A focused monthly commerce performance dashboard.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
