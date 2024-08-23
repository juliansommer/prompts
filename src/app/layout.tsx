import Footer from "@/components/Footer"
import Nav from "@/components/Nav"
import Provider from "@/components/Provider"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prompts-eight-xi.vercel.app"),
  title: {
    template: "%s | Prompts",
    default: "Prompts",
  },
  description: "Discover & Share AI Prompts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Prompts",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    site: "https://prompts-eight-xi.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange>
          <Provider session={undefined}>
            <div className="pointer-events-none fixed flex min-h-screen w-screen justify-center overflow-y-scroll p-[120px_24px_160px_24px] antialiased"></div>
            <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 sm:px-16">
              <Nav />
              {children}
            </main>
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
