import { Services } from '@/services'
import { Moralis } from 'moralis-v1'
import type { SignUp } from '../types'
import { useMoralis } from 'react-moralis'

const UserSignUp = async (
  email: string,
  password: string,
  username: string
) => {
  const result = await Moralis.Cloud.run(Services.user.register, {
    objectData: {
      email,
      password,
      username,
    },
  })
  return result
}

export default UserSignUp
