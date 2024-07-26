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
    <nav className="mb-16 flex w-full items-center justify-between pt-3">
      <Link href="/" className="flex items-center justify-center gap-2">
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
            <Link
              href="create"
              className="flex items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center font-inter text-sm text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
              Create Post
            </Link>

            <button
              type="button"
              onClick={() => signOut()}
              className="flex items-center justify-center rounded-full border border-black bg-transparent px-5 py-1.5 text-center font-inter text-sm text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
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
                  className="flex items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center font-inter text-sm text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
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
                  className="font-inter text-sm font-medium text-gray-700 hover:text-gray-500"
                  onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="font-inter text-sm font-medium text-gray-700 hover:text-gray-500"
                  onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center font-inter text-sm text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
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
                  className="flex items-center justify-center rounded-full border border-black bg-black px-5 py-1.5 text-center font-inter text-sm text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}
