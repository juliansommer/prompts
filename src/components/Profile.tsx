import PromptCard from "./PromptCard"
import { ProfileProps } from "@types"

export default function Profile({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="prompt_layout mt-10">
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
