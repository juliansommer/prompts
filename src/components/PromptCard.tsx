"use client"
import { type HandleEditDelete, type Post } from "@/types"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

interface PromptCardProps {
  post: Post
  handleTagClick?: (tag: string) => void
  handleEdit?: HandleEditDelete
  handleDelete?: HandleEditDelete
}

export default function PromptCard({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: Readonly<PromptCardProps>) {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  const [copied, setCopied] = useState("")

  const handleProfileClick = () => {
    console.log(post)
    if (post.creator?._id === session?.user?.id) {
      return router.push("/profile")
    }
    router.push(`/profile/${post.creator?._id}`)
  }

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)
  }

  return (
    <div className="nice_border h-fit w-full flex-1 break-inside-avoid rounded-lg p-6 pb-4 md:w-[360px]">
      <div className="flex items-center justify-between">
        <div
          className="flex cursor-pointer items-center"
          onClick={handleProfileClick}>
          <Image
            src={post.creator?.image ?? ""}
            alt={`${post.creator?.username} image`}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col pl-3">
            <h1 className="font-satoshi font-semibold text-gray-900 dark:text-gray-300">
              {post.creator?.username ?? "Unknown User"}
            </h1>
          </div>
        </div>

        <button
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full"
          onClick={() => {
            handleCopy()
          }}>
          {/* Render The Copy Button only if not already copied */}
          <Image
            src={copied === post.prompt ? "/tick.svg" : "/copy.svg"}
            width={20}
            height={20}
            alt={"Copy button"}
          />
        </button>
      </div>
      <p className="font-satoshi my-2 text-sm text-gray-700 dark:text-gray-300">
        {post.prompt}
      </p>
      <button
        className="font-inter cursor-pointer text-sm text-blue-700"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </button>

      {session?.user?.id === post.creator?._id && pathName === "/profile" && (
        <div className="flex-end gap-4 pt-3">
          <p
            className="font-inter cursor-pointer text-sm text-purple-600"
            onClick={(event) => handleEdit && handleEdit(event)}>
            Edit
          </p>
          <p
            className="font-inter cursor-pointer text-sm text-red-600"
            onClick={(event) => handleDelete && handleDelete(event)}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
