export type Creator = {
  _id: string
  username: string
  image: string
  __v: number
}

export type Post = {
  _id?: string
  creator?: Creator
  prompt: string
  tag: string
  createdAt?: Date
  __v?: number
}

type PostType = {
  prompt: string;
  tag: string;
}

export type FormProps = {
  type: string
  post: Post
  setPost: React.Dispatch<React.SetStateAction<PostType>>
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export type HandleEditDelete = (arg: Post | React.MouseEvent<HTMLElement>) => void;

export type ProfileProps = {
  name: string
  desc: string
  data: Post[]
  handleEdit?: HandleEditDelete
  handleDelete?: HandleEditDelete
}

export type PromptCardProps = {
  post: Post
  handleTagClick?: (tag: string) => void
  handleEdit?: HandleEditDelete
  handleDelete?: HandleEditDelete
}

export type PromptCardListProps = {
  data: Post[]
  handleTagClick: (tag: string) => void
}

export type ProviderProps = {
  children: React.ReactNode
  session: any
}