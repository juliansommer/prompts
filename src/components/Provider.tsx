"use client"
import React from "react"
import { SessionProvider } from "next-auth/react"
import { ProviderProps } from "@types"

export default function Provider({
  children,
  session,
}: Readonly<ProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
