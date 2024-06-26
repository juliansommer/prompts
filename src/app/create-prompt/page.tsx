"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"

export default function CreatePrompt() {
  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  })

  const createPrompt = async (e: { preventDefault: () => void }) => {
    e.preventDefault() // prevent browser from reloading on form
    setSubmitting(true)
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id, // Fix: Use optional chaining to safely access the 'id' property
          tag: post.tag,
        }),
      })

      if (response.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}
