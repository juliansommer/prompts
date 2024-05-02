import Link from "next/link"
import { FormProps } from "@types"

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
    <section className="flex-start w-full max-w-full flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="desc max-w-md text-left">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7">
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="mt-2 flex h-[200px] w-full rounded-lg p-3 text-sm text-gray-500 outline-0"
          />
        </label>
        <label className="relative">
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Tag
          </span>
          <input
            value={post.tag}
            onChange={handleTagChange}
            placeholder="Tag (e.g., tag)"
            required
            className="mt-2 flex w-full rounded-lg p-3 text-sm text-gray-500 outline-0"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
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
