import type { User } from '@/types'

export type LogIn = {
  email: string
  password: string
}

export type SignUp = Pick<LogIn, 'email' | 'password'> & {
  name: string
  repeatPassword: string
}
