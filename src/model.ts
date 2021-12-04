interface Status {
  id: number
  name: string
  creator_id: string
  custom_img?: string
}

interface User {
  id: number
  name: string
  avatar_url: string
}

export type { Status }
