import "@styles/globals.css"
import Footer from "@components/Footer"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
import { type Metadata } from "next"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Prompts",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: "favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          disableTransitionOnChange>
          <Provider session={undefined}>
            <div className="main"></div>
            <main className="app">
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
