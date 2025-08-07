import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Quintero - Full Stack Developer',
  description: 'Professional Full Stack Developer specializing in modern web technologies, React, Node.js, and cloud solutions.',
  keywords: 'Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development',
  authors: [{ name: 'Leonardo Quintero' }],
  openGraph: {
    title: 'Leonardo Quintero - Full Stack Developer',
    description: 'Professional Full Stack Developer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}