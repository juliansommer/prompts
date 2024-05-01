export type Post = {
  _id: string
  creator: Creator
  prompt: string
  tag: string
  createdAt: Date
  __v: number
}

export type Creator = {
  _id: string
  username: string
  image: string
  __v: number
}

export type HandleEditDelete = (arg: Post | React.MouseEvent<HTMLElement>) => void;

export type PromptCardProps = {
  post: Post
  handleTagClick?: (tag: string) => void
  handleEdit: HandleEditDelete
  handleDelete: HandleEditDelete
}

export type ProfileProps = {
  name: string
  desc: string
  data: Post[]
  handleEdit: HandleEditDelete
  handleDelete: HandleEditDelete
}