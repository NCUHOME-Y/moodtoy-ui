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

interface Doll {
  base: string
  clothes: string
  eyes: string
  hair: string
  eyebrow: string
  mouth: string
}

export type { User, Mood, Doll }
