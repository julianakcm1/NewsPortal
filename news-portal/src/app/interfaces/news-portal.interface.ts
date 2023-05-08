export interface News {
  id: number | string,
  title: string,
  author: string,
  image: string,
  post: string
}

export interface Comment {
  id: number,
  newsId: number,
  author: string,
  comment: string
}

