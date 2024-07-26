"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"

interface ProviderProps {
  children: React.ReactNode
  session: any
}

export default function Provider({
  children,
  session,
}: Readonly<ProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
