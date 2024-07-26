"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    mounted && (
      <button
        type="button"
        className="rounded-md p-2 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}>
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
    )
  )
}
