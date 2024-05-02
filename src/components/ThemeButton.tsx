"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <button
        type="button"
        className="rounded rounded-md p-2 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}>
        {theme === "dark" ? (
          <SunIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        ) : (
          <MoonIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        )}
      </button>
    )
  )
}
