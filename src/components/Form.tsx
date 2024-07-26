import { type Post } from "@/types"
import Link from "next/link"

interface PostType {
  prompt: string
  tag: string
}

interface FormProps {
  type: string
  post: Post
  setPost: React.Dispatch<React.SetStateAction<PostType>>
  submitting: boolean
  handleSubmit: (e: React.FormEvent) => Promise<void>
}

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}: Readonly<FormProps>) {
  // Sanitise Tag to be Alphanumeric
  const handleTagChange = (e: { target: { value: any } }) => {
    const value = e.target.value
    if (/^[a-z0-9]+$/i.test(value) || value === "") {
      setPost({ ...post, tag: value })
    }
  }

  return (
    <section className="flex w-full max-w-full flex-col items-start justify-start">
      <h1 className="mt-5 text-left text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-left text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-full max-w-2xl flex-col gap-7">
        <label>
          <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="mt-2 flex h-[200px] w-full rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-3 text-sm text-gray-500 outline-0 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-black/10 dark:text-gray-200"
          />
        </label>
        <label className="relative">
          <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Tag
          </span>
          <input
            value={post.tag}
            onChange={handleTagChange}
            placeholder="Tag (e.g., tag)"
            required
            className="mt-2 flex w-full rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-3 text-sm text-gray-500 outline-0 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-black/10 dark:text-gray-200"
          />
        </label>

        <div className="mx-3 mb-5 flex items-center justify-end gap-4">
          {/* Conditional link based on whether editing or creating a new post */}
          <Link
            href={type === "Edit" ? "/profile" : "/"}
            className="text-sm text-gray-500">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-primary-blue px-5 py-1.5 text-sm text-white">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
