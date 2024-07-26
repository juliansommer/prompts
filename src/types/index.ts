export interface Creator {
  _id: string
  username: string
  image: string
  __v: number
}

export interface Post {
  _id?: string
  creator?: Creator
  prompt: string
  tag: string
  createdAt?: Date
  __v?: number
}

export type HandleEditDelete = (
  arg: Post | React.MouseEvent<HTMLElement>,
) => void
