"use client"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

//@ts-expect-error next-auth v5 bug
import type { ProvidersType } from "next-auth/react"

export default function Nav() {
  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response: ProvidersType = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <nav className="flex-between mb-16 w-full pt-3">
      <Link href="/" className="flex-center flex gap-2">
        <Image
          src="/logo.svg"
          alt="Prompt Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="font-satoshi text-lg font-semibold tracking-wide text-black dark:text-white max-sm:hidden">
          Prompts
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create Post
            </Link>

            <button
              type="button"
              onClick={() => signOut()}
              className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image ?? ""}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile picture"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image ?? ""}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile picture"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="absolute right-0 top-full mt-3 flex w-full min-w-[210px] flex-col items-end justify-end gap-2 rounded-lg bg-white p-5">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="dark:white_btn black_btn mt-5 w-full"
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}
