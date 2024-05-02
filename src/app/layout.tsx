import "@styles/globals.css"
import Footer from "@components/Footer"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
import ThemeProvider from "@components/ThemeProvider"
import { type Metadata } from "next"

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
    <html lang="en">
      <body>
        <ThemeProvider>
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
