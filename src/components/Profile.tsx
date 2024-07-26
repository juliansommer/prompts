import { type HandleEditDelete, type Post } from "@/types"
import PromptCard from "./PromptCard"

interface ProfileProps {
  name: string
  desc: string
  data: Post[]
  handleEdit?: HandleEditDelete
  handleDelete?: HandleEditDelete
}

export default function Profile({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: Readonly<ProfileProps>) {
  return (
    <section className="w-full">
      <h1 className="mt-5 text-left text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {name} Profile
        </span>
      </h1>
      <p className="mt-5 max-w-2xl text-left text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
        {desc}
      </p>
      <div className="mt-10 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}
