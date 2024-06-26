"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"
import { Post } from "@types"

export default function MyProfile() {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`, {
        cache: "no-store",
      })
      const data = await response.json()
      setPosts(data)
    }

    if (session?.user?.id) {
      fetchPosts()
    }
  })

  const handleEdit = (post: Post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post: Post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id?.toString()}`, {
          method: "DELETE",
          cache: "no-store",
        })

        const filteredPosts = posts.filter(
          (item: Post) => item._id !== post._id,
        )

        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile
      name="Your"
      desc="Welcome to your profile page"
      data={posts}
      handleEdit={(post: Post | React.MouseEvent<HTMLElement>) =>
        handleEdit(post as Post)
      }
      handleDelete={(post: Post | React.MouseEvent<HTMLElement>) =>
        handleDelete(post as Post)
      }
    />
  )
}
