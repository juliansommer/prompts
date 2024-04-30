import "@styles/globals.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
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
        <Provider session={undefined}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
