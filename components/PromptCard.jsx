"use client"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}) {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  const [copied, setCopied] = useState("")

  const handleProfileClick = () => {
    console.log(post)
    if (post.creator._id === session?.user.id) {
      return router.push("/profile")
    }
    router.push(`/profile/${post.creator._id}`)
  }

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)
  }

  return (
    <div className="prompt_card">
      <div className="flex items-start justify-between gap-5">
        <div
          className="flex flex-1 cursor-pointer items-center justify-start gap-3"
          onClick={handleProfileClick}>
          <Image
            src={post.creator.image}
            alt={`${post.creator.username} image`}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
          </div>
        </div>

        <div
          className="copy_btn"
          onClick={() => {
            handleCopy()
          }}>
          {/* Render The Copy Button only if not already copied */}
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="blue_gradient cursor-pointer font-inter text-sm"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex-center mt-5 gap-4 border-t border-gray-100 pt-3">
          <p
            className="blue_gradient cursor-pointer font-inter text-sm"
            onClick={handleEdit}>
            Edit
          </p>
          <p
            className="purple_gradient cursor-pointer font-inter text-sm"
            onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
