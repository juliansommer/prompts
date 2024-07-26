"use client"
import Profile from "@/components/Profile"
import { useEffect, useState } from "react"

export default function UserProfile({ params }: Readonly<{ params: any }>) {
  const [userPosts, setUserPosts] = useState([])
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`, {
        cache: "no-store",
      })
      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) fetchPosts()
  }, [params.id])

  // need to make request to the api to get the username based off the id
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch(`/api/users/${params?.id}/name`, {
        cache: "no-store",
      })
      const data = await response.json()

      setUserName(data)
    }

    fetchName()
  }, [params.id])

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s profile`}
      data={userPosts}
    />
  )
}
