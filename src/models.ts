interface User {
  id: number
  name: string
  sid: string
}

interface Mood {
  id: number
  type: 'bad' | 'resolve'
  graffiti_url: string
  date: Date
  text: string
}

export type { User, Mood }
