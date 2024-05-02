"use client"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { PromptCardProps } from "@types"

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
    <div className="h-fit w-full flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20  bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] dark:border-gray-700">
      <div className="flex items-start justify-between gap-5">
        <div
          className="flex flex-1 cursor-pointer items-center justify-start gap-3"
          onClick={handleProfileClick}>
          <Image
            src={post.creator?.image ?? ""}
            alt={`${post.creator?.username} image`}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 dark:text-gray-300">
              {post.creator?.username ?? "Unknown User"}
            </h3>
          </div>
        </div>

        <div
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
          onClick={() => {
            handleCopy()
          }}>
          {/* Render The Copy Button only if not already copied */}
          <Image
            src={copied === post.prompt ? "/icons/tick.svg" : "/icons/copy.svg"}
            width={12}
            height={12}
            alt={"Copy button"}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700 dark:text-gray-300">
        {post.prompt}
      </p>
      <p
        className="blue_gradient cursor-pointer font-inter text-sm"
        onClick={() => handleTagClick && handleTagClick(post.tag)}>
        #{post.tag}
      </p>

      {session?.user?.id === post.creator?._id && pathName === "/profile" && (
        <div className="flex-center mt-5 gap-4 border-t border-gray-100 pt-3">
          <p
            className="blue_gradient cursor-pointer font-inter text-sm"
            onClick={(event) => handleEdit && handleEdit(event)}>
            Edit
          </p>
          <p
            className="purple_gradient cursor-pointer font-inter text-sm"
            onClick={(event) => handleDelete && handleDelete(event)}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
