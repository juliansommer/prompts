"use client"
import { type Post } from "@/types"
import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"

interface PromptCardListProps {
  data: Post[]
  handleTagClick: (tag: string) => void
}

function PromptCardList({
  data,
  handleTagClick,
}: Readonly<PromptCardListProps>) {
  return (
    <div className="mt-6 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default function Feed() {
  const [allPosts, setAllPosts] = useState([])
  const [searchText, setSearchText] = useState("")
  const [searchedResults, setSearchedResults] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt", { cache: "no-store" })
      const data = await response.json()
      setAllPosts(data)
    }
    fetchPosts()
  }, [])

  const filterPrompts = (searchText: string) => {
    const regex = new RegExp(searchText, "i") // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item: Post) =>
        regex.test(item.creator?.username ?? "") ||
        regex.test(item.tag) ||
        regex.test(item.prompt),
    )
  }

  const handleSearchChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value
    setSearchText(inputValue)
    if (inputValue.length > 2) {
      const searchResult = filterPrompts(inputValue)
      setSearchedResults(searchResult)
    } else {
      setSearchedResults([])
    }
  }

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName)
    const searchResult = filterPrompts(tagName)
    setSearchedResults(searchResult)
  }

  return (
    <section className="mx-auto mt-16 flex w-full max-w-xl flex-col items-center justify-center gap-2">
      <form className="relative flex w-full items-center justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="peer block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 font-satoshi text-sm font-medium focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-black/5"
        />
      </form>

      {searchText.length > 2 ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}
