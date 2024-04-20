"use client"
import { useEffect, useState } from "react"
import Profile from "@components/Profile"

export default function UserProfile({ params }) {
  const [userPosts, setUserPosts] = useState([])
  const [userName, setUserName] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`)
      const data = await response.json()

      setUserPosts(data)
    }

    if (params?.id) fetchPosts()
  }, [params.id])

  // need to make request to the api to get the username based off the id
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch(`/api/users/${params?.id}/name`)
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
