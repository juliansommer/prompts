"use client"
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"
import { PromptCardListProps } from "@types"
import { Post } from "@types"

function PromptCardList({ data, handleTagClick }: PromptCardListProps) {
  return (
    <div className="prompt_layout mt-16">
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
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setAllPosts(data)
    }
    fetchPosts()
  }, [])

  const filterPrompts = (searchText: string) => {
    const regex = new RegExp(searchText, "i") // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item: Post) =>
        regex.test(item.creator?.username || "") ||
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
    <section className="feed">
      <form className="flex-center relative w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
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
