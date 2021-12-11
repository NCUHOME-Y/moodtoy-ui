interface User {
  user_id: string
  username: string
  avatar?: string
}

interface AuthedUser {
  user: User
  token: string
}

interface Mood {
  id: number
  type: 'bad' | 'resolve'
  graffiti_url: string
  date: Date
  text: string
}

interface Doll {
  base: string
  clothes: string
  eyes: string
  hair: string
  eyebrow: string
  mouth: string
}

export type { User, Mood, Doll, AuthedUser }
